// import pool from "../../utils/database.js";
// import { cart_id } from "./user.js";
// var cartId = 0;
// async function addItem(productId, quantity, size){
//     try {
//         cartId = cart_id;
//         const request = pool.request();
//         request.input("productId", productId);
//         request.input("size", size);
//         //Check inventory
//         const checkInventory = await request.query("SELECT * FROM product inner join inventory on product.product_id = inventory.product_id" +
//                 "\nwhere product.product_id = @productId and inventory.size = @size and inventory.quantity > 0;");
//         //console.log(checkInventory.recordset);
//         if(checkInventory.recordset.length > 0){
//             //exist
//             const sku = checkInventory.recordset[0].sku;
//             request.input("cartId", cartId);
//             request.input("sku", sku);
//             request.input("quantity", quantity);
//             const getAllSku = await request.query("SELECT * FROM item WHERE sku = @sku AND cart_id = @cartId");
//             //console.log("Item : ", getAllSku.recordset);
//             if(getAllSku.recordset.length > 0){
//                 const itemId = parseInt(getAllSku.recordset[0].item_id);
//                 let newQuantity = parseInt(getAllSku.recordset[0].quantity) + quantity;
//                 request.input("newQuantity", newQuantity);
//                 request.input("itemId", itemId);
//                 const statement = await request.query("UPDATE item SET quantity = @newQuantity WHERE item_id = @itemId");
//                 return statement.rowsAffected[0] > 0;
//             }
//             else{
//                 const statement = await request.query("INSERT INTO item values(@cartId, @sku, @quantity)")
//                 return statement.rowsAffected[0] > 0;
//             }
//         }
//     } catch (error) {
//         console.log("Error adding item.", error);
//         throw error;
//     }
// }
// const item = {addItem};
// export {item};

import pool from "../../utils/database.js";

async function addItem(productId, quantity, size, userId){
    try {
        const request = pool.request();
        request.input("productId", productId);
        request.input("size", size);
        //Check inventory
        const checkInventory = await request.query("SELECT * FROM product INNER JOIN inventory ON product.product_id = inventory.product_id" +
                " WHERE product.product_id = @productId AND inventory.size = @size AND inventory.quantity > 0;");
        
        if(checkInventory.recordset.length > 0){
            const sku = checkInventory.recordset[0].sku;
            const cartId = await getCartId(userId); // Hàm này cần phải được triển khai để lấy cartId từ userId
            request.input("cartId", cartId);
            request.input("sku", sku);
            request.input("quantity", quantity);
            const getAllSku = await request.query("SELECT * FROM item WHERE sku = @sku AND cart_id = @cartId");
            
            if(getAllSku.recordset.length > 0){
                const itemId = parseInt(getAllSku.recordset[0].item_id);
                let newQuantity = parseInt(getAllSku.recordset[0].quantity) + quantity;
                request.input("newQuantity", newQuantity);
                request.input("itemId", itemId);
                const statement = await request.query("UPDATE item SET quantity = @newQuantity WHERE item_id = @itemId");
                return statement.rowsAffected[0] > 0;
            }
            else{
                const statement = await request.query("INSERT INTO item values(@cartId, @sku, @quantity)")
                return statement.rowsAffected[0] > 0;
            }
        }
    } catch (error) {
        console.log("Error adding item.", error);
        throw error;
    }
}
const item = {addItem};
export {item};

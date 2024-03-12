// cart.js

import { connectDatabase, closeDatabase, queryDatabase } from "../../utils/database.js";

const fetchData = async () => {
    try {
        await connectDatabase();

        const user_id = 1;
        const cart_id = 1;
        const query = `SELECT i.*, p.[name] AS product_name, p.price AS product_price, inv.size, inv.quantity AS inventory_quantity FROM item AS i JOIN cart AS c ON i.cart_id = c.cart_id JOIN inventory AS inv ON i.sku = inv.sku JOIN product AS p ON inv.product_id = p.product_id WHERE c.user_id = ${user_id} and c.cart_id = ${cart_id};`;

        // Sử dụng await để đợi Promise trả về
        const result = await queryDatabase(query);

        return result;
    } catch (error) {
        console.error('Error fetching data from database:', error);
    } finally {
        await closeDatabase();
    }
};

// Gọi hàm để lấy dữ liệu
const getCartData = async () => {
    const cartData = await fetchData();
    
    // Kiểm tra xem cartData có dữ liệu hay không trước khi sử dụng forEach
    if (cartData) {
        return cartData;
    } else {
        console.log('No data available');
    }
};

export {getCartData}
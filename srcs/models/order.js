import pool from "../../utils/database.js";

async function addOrder(cartId, orderDate, address){
    try {
        const request = pool.request();
        request.input("cartId", cartId);
        request.input("orderDate", orderDate);
        request.input("address", address);

        const addStatement = await request.query(`INSERT INTO [order] VALUES(@cartId, @orderDate, @address)`);

        return addStatement.rowsAffected[0] > 0;
    } catch (error) {
        console.error("Error adding order:", error);
        throw error;
    }
}

const order = {addOrder};
export {order};
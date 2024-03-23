// cart.js

import pool from "../../utils/database.js";

async function getCartData(userId) {
  try {
    const request = pool.request();
    //request.input("@userId", userId)
    const result = await request.query(`
            SELECT C.*, pi.url 
            FROM
                (
                    SELECT B.*, ca.user_id, ca.total_price, ca.cart_status 
                    FROM 
                        (
                            SELECT A.*, pr.color, pr.price, pr.name 
                            FROM
                                (
                                    SELECT it.*, inv.product_id, inv.size 
                                    FROM item AS it 
                                    INNER JOIN inventory AS inv ON it.sku = inv.sku
                                ) AS A 
                            INNER JOIN product AS pr ON A.product_id = pr.product_id
                        ) AS B 
                    INNER JOIN cart AS ca ON B.cart_id = ca.cart_id
                ) AS C 
            INNER JOIN productImage AS pi ON C.product_id = pi.product_id
            WHERE pi.url LIKE '%-1%' AND C.user_id = ${userId} AND C.cart_status = 0;
        `);
    if (result) {
      //console.log(result.recordset);
      return result.recordset;
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data from database:", error);
  }
}
async function updateStatusCart(userId, cartId) {
  try {
    const request = pool.request();
    request.input("userId", userId);
    request.input("cartId", cartId);
    const updateStatement = await request.query(`UPDATE cart 
    SET cart_status = 1
    WHERE cart_id = @cartId and user_id = @userId`);
    return updateStatement.rowsAffected[0] > 0;
  } catch (error) {
    console.error("Error update status cart:", error);
    throw error;
  }
}
async function addCart(userId) {
  try {
    const request = pool.request();
    request.input("userId", userId);
    const addStatement = await request.query(
      `INSERT INTO cart VALUES(@userId, 0.0, 0)`
    );
    return addStatement.rowsAffected[0] > 0;
  } catch (error) {
    console.error("Error addinf new cart:", error);
    throw error;
  }
}
const cart = { getCartData, updateStatusCart, addCart };
export { cart };

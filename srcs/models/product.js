import pool from "../../utils/database.js";
import sql from 'mssql';

async function getProductsByCategoryId(categoryId) {
    try {
        const request = pool.request();
        request.input('categoryId', categoryId);
        const result = await request.query("select * from product inner join productImage on product.product_id = productImage.product_id" +
            "\nwhere product.category_id = @categoryId and productImage.url like '%-1%';");
        //console.log(result.recordset)
        return result.recordset;
    } catch (error) {
        console.error('Error getting products by category ID:', error);
        throw error;
    }
}

async function getProductsByCategoryIdOrderByLowToHigh(categoryId) {
    try {
        const request = pool.request();
        request.input('categoryId', categoryId);

        const result = await request.query("select * from product inner join productImage on product.product_id = productImage.product_id" +
            "\nwhere product.category_id = @categoryId and productImage.url like '%-1%'" +
            "\order by product.price asc;");
        //console.log(result.recordset)
        return result.recordset;
    } catch (error) {
        console.error('Error getting products by category ID:', error);
        throw error;
    }
}
async function getProductsByCategoryIdOrderByHighToLow(categoryId) {
    try {
        const request = pool.request();
        request.input('categoryId', categoryId);

        const result = await request.query("select * from product inner join productImage on product.product_id = productImage.product_id" +
            "\nwhere product.category_id = @categoryId and productImage.url like '%-1%'" +
            "\order by product.price desc;");
        //console.log(result.recordset)
        return result.recordset;
    } catch (error) {
        console.error('Error getting products by category ID:', error);
        throw error;
    }
}
async function getProductsById(id) {
    try {
        const request = pool.request();
        request.input('id', id);
        const result = await request.query('select *' +
            '\nfrom product inner join productImage on product.product_id=productImage.product_id' +
            '\nwhere product.product_id = @id');
        //console.log(result.recordset)
        return result.recordset;
    } catch (error) {
        console.error('Error getting products by category ID:', error);
        throw error;
    }
}
async function getAllProducts() { //lấy các sản phẩm nổi bật nhất 
    try {
        const request = pool.request();
        const result = await request.query("select * from product inner join productImage on product.product_id = productImage.product_id" +
            "\nwhere productImage.url like '%-1%';");
        return result.recordset;
    } catch (error) {
        console.error('Failed to get products', error);
        return []
    }
}
async function getProductsByKeyWord(keyWord) {
    try {
        const request = pool.request();
        request.input('keyWord', sql.NVarChar, keyWord);
        const result = await request.query("SELECT * FROM product INNER JOIN productImage ON product.product_id = productImage.product_id WHERE product.name LIKE '%' + @keyWord + '%' and productImage.url like '%-1%';");
        return result.recordset;
        //console.log(result.recordset);
        //console.log("kt:" + keyWord);
    } catch (error) {
        console.error('Failed to search products', error);
        throw error;
    }
}
const product = { getProductsByCategoryId, getProductsById, getAllProducts, getProductsByCategoryIdOrderByHighToLow, getProductsByCategoryIdOrderByLowToHigh, getProductsByKeyWord};
export { product };
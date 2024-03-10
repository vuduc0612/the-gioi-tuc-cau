import pool from "../../utils/database.js";

async function getProductsByCategoryId(id) {
    try {
        const request = pool.request();
        request.input('id', id);
        const result = await request.query("select * from product inner join image on product.product_id = image.product_id where product.category_id = @id and image.url like '%first%';");
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
        '\nfrom product inner join image on product.product_id=image.product_id'+
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
        const result = await request.query("select * from product inner join image on product.product_id = image.product_id where image.url like '%first%';");
        return result.recordset;
    } catch (error) {
        console.error('Failed to get products', error);
        return []
    }
}
const product = { getProductsByCategoryId, getProductsById, getAllProducts};
export { product };
import pool from "../../utils/database.js";

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
const product = { getProductsByCategoryId, getProductsById, getAllProducts, getProductsByCategoryIdOrderByHighToLow, getProductsByCategoryIdOrderByLowToHigh };
export { product };
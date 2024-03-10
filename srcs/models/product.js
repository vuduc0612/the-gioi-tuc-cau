import pool from '/CODE/New folder/the-gioi-tuc-cau/utils/database.js'


async function getAllProducts() { //lấy các sản phẩm nổi bật nhất 
    try {
        const request = pool.request();
        const result = await request.query('SELECT * FROM product')
        return result.recordset;
    } catch (error) {
        console.error('Failed to get products', error);
        return []
    }
}

// Trong file /CODE/New folder/the-gioi-tuc-cau/srcs/models/product.js
const product = { getAllProducts,};
export { product };

import {product} from '/CODE/New folder/the-gioi-tuc-cau/srcs/models/product.js'

async function getAllProducts (req, res) {
    try {
        const products = await product.getAllProducts();
        res.render('home', { products: products });
    } catch (error) {
        console.error('Failed to render products', error);
    }
};

const productController = {getAllProducts,};
export { productController };
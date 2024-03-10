import { product } from "../models/product.js";
async function getProductsByCategoryId (req, res) {
    try {
        const result = await product.getProductsByCategoryId(1);
        //console.log(result);
        res.render("category.ejs", {
            datas: result,
            title: "Giày Đá Bóng NIKE",
        });
    } catch (error) {
        res.status(500).send('Internal server error');
    }
}
async function getAllProducts (req, res) {
    try {
        const products = await product.getAllProducts();
        res.render('home', { products: products });
    } catch (error) {
        console.error('Failed to render products', error);
    }
};
async function getProductsById(req, res) {
    try {
        const id = parseInt(req.params.id);
        const result = await product.getProductsById(id);
        //console.log(result);
        res.render("detailProduct.ejs", {
            products: result,
        });
    } catch (error) {
        res.status(500).send('Internal server error');
    }
}
const productController = {getAllProducts, getProductsByCategoryId, getProductsById};
export { productController };
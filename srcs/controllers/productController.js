import { product } from "../models/product.js";
import { loginController } from "./loginController.js";

var userName = '';
var userStatus = '';
async function getProductsByCategoryId(req, res) {
    try {
        userName = loginController.getUser().userName;
        userStatus = loginController.getUser().userStatus;
        const result = await product.getProductsByCategoryId(1);
        //console.log(result);
        res.render("category.ejs", {
            datas: result,
            title: "Giày Đá Bóng NIKE",
            userName,
            userStatus,
        });
    } catch (error) {
        res.status(500).send('Internal server error');
        throw error;
    }
}
async function getProductsById(req, res) {
    try {
        userName = loginController.getUser().userName;
        userStatus = loginController.getUser().userStatus;
        const id = parseInt(req.params.id);
        const result = await product.getProductsById(id);
        //console.log(result);
        res.render("detailProduct.ejs", {
            products: result,
            userName,
            userStatus,
        });
    } catch (error) {
        res.status(500).send('Internal server error');
        throw error;
    }
}
const productController = { getProductsByCategoryId, getProductsById };
export { productController };
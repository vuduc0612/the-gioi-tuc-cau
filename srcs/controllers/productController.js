import { product } from "../models/product.js";
import { user, curUser, status, log } from "../models/user.js";

var curName = '';
var curStatus = '';
var logi = '';
async function getProductsByCategoryId(req, res) {
    try {
        curName = curUser;
        curStatus = status;
        logi = log;
        const result = await product.getProductsByCategoryId(1);
        //console.log(result);
        res.render("category.ejs", {
            datas: result,
            title: "Giày Đá Bóng NIKE",
            curName,
            curStatus,
            logi,
        });
    } catch (error) {
        res.status(500).send('Internal server error');
    }
}
async function getProductsById(req, res) {
    try {
        curName = curUser;
        curStatus = status;
        logi = log;
        const id = parseInt(req.params.id);
        const result = await product.getProductsById(id);
        //console.log(result);
        res.render("detailProduct.ejs", {
            products: result,
            curName,
            curStatus,
            logi,
        });
    } catch (error) {
        res.status(500).send('Internal server error');
    }
}
const productController = { getProductsByCategoryId, getProductsById };
export { productController };
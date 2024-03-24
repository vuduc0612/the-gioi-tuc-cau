import { product } from "../models/product.js";
import { loginController } from "./loginController.js";

var userName = '';
var userStatus = '';
async function getAllProductsNike(req, res) {
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
async function getAllProductsAdidas(req, res) {
    try {
        userName = loginController.getUser().userName;
        userStatus = loginController.getUser().userStatus;
        const result = await product.getProductsByCategoryId(2);
        //console.log(result);
        res.render("category.ejs", {
            datas: result,
            title: "Giày Đá Bóng ADIDAS",
            userName,
            userStatus,
        });
    } catch (error) {
        res.status(500).send('Internal server error');
        throw error;
    }
}
async function getAllProductsMizuno(req, res) {
    try {
        userName = loginController.getUser().userName;
        userStatus = loginController.getUser().userStatus;
        const result = await product.getProductsByCategoryId(3);
        //console.log(result);
        res.render("category.ejs", {
            datas: result,
            title: "Giày Đá Bóng MIZUNO",
            userName,
            userStatus,
        });
    } catch (error) {
        res.status(500).send('Internal server error');
        throw error;
    }
}
async function getAllProductsBall(req, res) {
    try {
        userName = loginController.getUser().userName;
        userStatus = loginController.getUser().userStatus;
        const result = await product.getProductsByCategoryId(4);
        //console.log(result);
        res.render("category.ejs", {
            datas: result,
            title: "Bóng Đá",
            userName,
            userStatus,
        });
    } catch (error) {
        res.status(500).send('Internal server error');
        throw error;
    }
}
async function getAllProductsGlove(req, res) {
    try {
        userName = loginController.getUser().userName;
        userStatus = loginController.getUser().userStatus;
        const result = await product.getProductsByCategoryId(5);
        //console.log(result);
        res.render("category.ejs", {
            datas: result,
            title: "Găng tay",
            userName,
            userStatus,
        });
    } catch (error) {
        res.status(500).send('Internal server error');
        throw error;
    }
}
async function getAllProductsSock(req, res) {
    try {
        userName = loginController.getUser().userName;
        userStatus = loginController.getUser().userStatus;
        const result = await product.getProductsByCategoryId(6);
        //console.log(result);
        res.render("category.ejs", {
            datas: result,
            title: "Tất chân",
            userName,
            userStatus,
        });
    } catch (error) {
        res.status(500).send('Internal server error');
        throw error;
    }
}
async function getAllProductsTape(req, res) {
    try {
        userName = loginController.getUser().userName;
        userStatus = loginController.getUser().userStatus;
        const result = await product.getProductsByCategoryId(7);
        //console.log(result);
        res.render("category.ejs", {
            datas: result,
            title: "Băng keo",
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
async function getProductsByKeyWord(req, res) {
    try {
        userName = loginController.getUser().userName;
        userStatus = loginController.getUser().userStatus;
        const keyWord = req.query.q;
        const result = await product.getProductsByKeyWord(keyWord);
        //console.log(result);
        res.render("category.ejs", {
            datas: result,
            title: "Kết quả tìm kiếm",
            userName,
            userStatus,
        });
    } catch (error) {
        res.status(500).send('Internal server error');
        throw error;
    }
}

const productController = { getAllProductsNike, getAllProductsAdidas, 
                getAllProductsMizuno, getAllProductsBall, 
                getAllProductsGlove, getAllProductsSock, 
                getAllProductsSock, getAllProductsTape, 
                getProductsById, getProductsByKeyWord };
export { productController };
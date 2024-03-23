// import { product } from "../models/product.js";
// import { loginController } from "./oginController.js";

// var userName = '';
// var userStatus = '';
// async function getProductsByCategoryId(req, res) {
//     try {
//         userName = loginController.getUser().userName;
//         userStatus = loginController.getUser().userStatus;
//         const result = await product.getProductsByCategoryId(1);
//         //console.log(result);
//         res.render("category.ejs", {
//             datas: result,
//             title: "Giày Đá Bóng NIKE",
//             userName,
//             userStatus,
//         });
//     } catch (error) {
//         res.status(500).send('Internal server error');
//         throw error;
//     }
// }
// async function getProductsById(req, res) {
//     try {
//         userName = loginController.getUser().userName;
//         userStatus = loginController.getUser().userStatus;
//         const id = parseInt(req.params.id);
//         const result = await product.getProductsById(id);
//         //console.log(result);
//         res.render("detailProduct.ejs", {
//             products: result,
//             userName,
//             userStatus,
//         });
//     } catch (error) {
//         res.status(500).send('Internal server error');
//         throw error;
//     }
// }
// const productController = { getProductsByCategoryId, getProductsById };
// export { productController };
import { product } from "../models/product.js";


let userName = '';
let userStatus = 'Đăng nhập';
async function getProductsByCategoryId(req, res) {
    try {
        if(req.session.user) {
            userName = req.session.user.username;
        } // Truy cập dữ liệu người dùng từ session
        const result = await product.getProductsByCategoryId(1);
        res.render("category.ejs", {
            datas: result,
            title: "Giày Đá Bóng NIKE",
            userName: userName, // Sử dụng dữ liệu người dùng từ session
            userStatus: userStatus,
        });
    } catch (error) {
        res.status(500).send('Internal server error');
        throw error;
    }
}

async function getProductsById(req, res) {
    try {
        console.log(req.session.user);
        const { username, userStatus } = req.session.user; // Truy cập dữ liệu người dùng từ session
        const id = parseInt(req.params.id);
        const result = await product.getProductsById(id);
        res.render("detailProduct.ejs", {
            products: result,
            userName: username, // Sử dụng dữ liệu người dùng từ session
            userStatus: userStatus,
        });
    } catch (error) {
        res.status(500).send('Internal server error');
        throw error;
    }
}

const productController = { getProductsByCategoryId, getProductsById };
export { productController };

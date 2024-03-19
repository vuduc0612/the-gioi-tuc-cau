import { user } from "../models/user.js";
import { user_name, user_id, status, cart_id } from "../models/user.js";
import { product } from "../models/product.js";
import express from "express";
import bodyParser from 'body-parser';

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));

var userName = '';
var userStatus = '';
var userId = 0;
var cartId = 0;
async function getHomePage(req, res){
    userName = user_name;
    userStatus = status;
    userId = user_id;
    cartId = cart_id;
    const products = await product.getAllProducts();
    res.render('home.ejs', { 
        userName, 
        userStatus, 
        cartId,
        products: products,
    });
}
async function register (req, res) {
    const { username, email, password } = req.body;
    try {
        const success = await user.registerUser(username, email, password);
        if (success) {
            res.redirect('/login?successRes=true');
        } else {
            res.status(400).send('Failed to register user');
        }
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Internal server error');
    }
}
async function login(req, res) {
    const { email, password } = req.body;
    //console.log(req.body);
    try {
        const users = await user.loginUser(email, password);
        if (users) {
            userId = user_id;
            cartId = cart_id;
            //console.log(userName, userStatus);
            res.redirect('/login?successLog=true');
        } else {
            res.redirect('/login?error=true');
        }
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).send('Internal server error');
    }
}
async function logout(req, res) {
    // Reset curUser và status về giá trị mặc định
    userName = '';
    userId = 0;
    userStatus = 'Đăng nhập';
    cartId = 0;
    const products = await product.getAllProducts();
    // Redirect người dùng về trang đăng nhập hoặc trang chính, tuỳ thuộc vào yêu cầu
    res.render('home.ejs', { userName, userId, userStatus, products });
}

function getUser(){
    return {
        'userName': userName,
        'userId': userId,
        'userStatus': userStatus,
        'cartId': cartId,
    }
}
const loginController = {getHomePage, register, login, logout, getUser};
export {loginController};

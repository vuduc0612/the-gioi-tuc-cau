import { user } from "../models/user.js";
import { curUser, status, log } from "../models/user.js";
import { product } from "../models/product.js";
import express from "express";
import bodyParser from 'body-parser';

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));

var curName = '';
var curStatus = '';
var logi = '';

async function getHomePage(req, res){
     curName = curUser;
     curStatus = status;
     logi = log;
    
    const products = await product.getAllProducts();
    res.render('home.ejs', { 
        curName, 
        curStatus, 
        logi,
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
            // curName = users.username;
            // curStatus = 'Đăng xuất';
            // logi = '/home';
            console.log(curName, curStatus, logi);
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
    curName = '';
    curStatus = 'Đăng nhập';
    logi = '/login';
    const products = await product.getAllProducts();
    // Redirect người dùng về trang đăng nhập hoặc trang chính, tuỳ thuộc vào yêu cầu
    res.render('home.ejs', { curName, curStatus, logi, products });
}
const LoginController = {getHomePage, register, login, logout};
export {LoginController};
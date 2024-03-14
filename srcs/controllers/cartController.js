import { cart } from "../models/cart.js";
import { user, user_name, status, user_id } from "../models/user.js";
import { order } from "../models/order.js";
import { loginController } from "./loginController.js";
import { item } from "../models/item.js";
import express from "express";
import bodyParser from 'body-parser';

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));

var userName = '';
var userStatus = '';
var userId = 0;
var cartId = 0;

async function getCartData(req, res) {
    try {
        userName = loginController.getUser().userName;
        userId = loginController.getUser().userId;
        cartId = loginController.getUser().cartId;
        userStatus = status;  
        console.log(user_id);

        const infoOfOder = req.body;
        const productId = parseInt(infoOfOder.productId);
        const size = parseInt(infoOfOder.size);
        const quantity = parseInt(infoOfOder.quantity)
        //console.log(productId, size, quantity);
        const check = await item.addItem(productId, quantity, size);
        //console.log(check);
        if (check) {
            const cartData = await cart.getCartData(user_id);
            //console.log(cartData);
            res.render('cart', {
                items: cartData,
                userName,
                userStatus,
                userId,
            });
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
        throw error;
    }
}
async function getCart(req, res) {
    try {
        userName = loginController.getUser().userName;
        userId = loginController.getUser().userId;
        cartId = loginController.getUser().cartId;
        userStatus = status; 
        console.log("USER ID:", userId);

        const cartData = await cart.getCartData(userId);
        //console.log(cartData);
        res.render('cart', {
            items: cartData,
            userName,
            userStatus,
            userId
        }
        );
    } catch (error) {
        res.status(500).send('Internal Server Error');
        throw error;
    }
}
async function getChekOut(req, res){
    try {
        userName = loginController.getUser().userName;
        userId = loginController.getUser().userId;
        cartId = loginController.getUser().cartId;
        userStatus = status;
        const cartData = await cart.getCartData(userId);
        const userData = await user.getUserById(userId);
        console.log(userData);
        res.render('checkout', { cartData, userData, userName, userId, userStatus, cartId });
    } catch (error) {
        res.status(500).send('Internal Server Error');
        throw error;
    }
}

async function finishCheckout(req, res){
    try {
        userName = loginController.getUser().userName;
        userId = loginController.getUser().userId;
        cartId = loginController.getUser().cartId;
        userStatus = status;
        const data = req.body;
        let date = new Date().toJSON().slice(0,10);
        const updateStatement = await user.updateUser(data.firstName, data.lastName, data.address, data.phoneNumber, userId);
        const addOrderStatement = await order.addOrder(cartId, date, data.address);
        //console.log("data:", data);
        //console.log(updateStatement, addOrderStatement);
        if(updateStatement && addOrderStatement){
            const updateStatusCart = await cart.updateStatusCart(userId, cartId);
            const addCartStatement = await cart.addCart(userId);
            if(updateStatusCart && addCartStatement){
                res.render('finishCheckout', {userName, userId, userStatus, cartId});
            }
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
        throw error;
    }
}
const cartController = { getCartData, getCart, getChekOut, finishCheckout };
export { cartController };
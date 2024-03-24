import { cart } from "../models/cart.js";
import { user } from "../models/user.js";
import { order } from "../models/order.js";
import { item } from "../models/item.js";
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

var userName = "";
var userStatus = "";
var userId = 0;
var cartId = 0;

async function addItem(req, res) {
  try {
    if (req.session.user) {
        userName = req.session.user.username;
        userId = req.session.user.user_id;
        cartId = req.session.user.cart_id;
        userStatus = "Đăng xuất";
      } else {
        userName = "";
        userStatus = "Đăng nhập";
        userId = "0";
        cartId = "0";
      }
    //console.log(userId);

    const infoOfOrder = req.body;
    const productId = parseInt(infoOfOrder.productId);
    const size = parseInt(infoOfOrder.size);
    const quantity = parseInt(infoOfOrder.quantity);

    const check = await item.addItem(req, productId, quantity, size);
    console.log(check);

    if (check) {
      res.redirect("/cart");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
    throw error;
  }
}

async function getCart(req, res) {
  try {
    //console.log("Get getCart:", req.session.user);
    if (req.session.user) {
        userName = req.session.user.username;
        userId = req.session.user.user_id;
        cartId = req.session.user.cart_id;
        userStatus = "Đăng xuất";
      } else {
        userName = "";
        userStatus = "Đăng nhập";
        userId = "0";
        cartId = "0";
      }

    console.log("USER ID:", userId);

    const cartData = await cart.getCartData(userId);

    res.render("cart", {
      items: cartData,
      userName,
      userStatus,
      userId,
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
    throw error;
  }
}

async function getCheckout(req, res) {
  try {
    //console.log("Get checkout:", req.body);
    if (req.session.user) {
        userName = req.session.user.username;
        userId = req.session.user.user_id;
        cartId = req.session.user.cart_id;
        userStatus = "Đăng xuất";
      } else {
        userName = "";
        userStatus = "Đăng nhập";
        userId = "0";
        cartId = "0";
      }

    const cartData = await cart.getCartData(userId);
    const userData = await user.getUserById(userId);
    //
    res.render("checkout", {
      cartData,
      userData,
      userName,
      userId,
      userStatus,
      cartId,
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
    throw error;
  }
}

async function finishCheckout(req, res) {
  try {
    if (req.session.user) {
        userName = req.session.user.username;
        userId = req.session.user.user_id;
        cartId = req.session.user.cart_id;
        userStatus = "Đăng xuất";
      } else {
        userName = "";
        userStatus = "Đăng nhập";
        userId = "0";
        cartId = "0";
      }

    const data = req.body;
    let date = new Date().toJSON().slice(0, 10);

    const updateStatement = await user.updateUser(
      data.firstName,
      data.lastName,
      data.address,
      data.phoneNumber,
      userId
    );
    const addOrderStatement = await order.addOrder(cartId, date, data.address);

    if (updateStatement && addOrderStatement) {
      const updateStatusCart = await cart.updateStatusCart(userId, cartId);
      const addCartStatement = await cart.addCart(userId);

      if (updateStatusCart && addCartStatement) {
        res.render("finishCheckout", { userName, userId, userStatus, cartId });
      }
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
    throw error;
  }
}

async function delteItem(req, res) {
  try {
    const idItem = parseInt(req.query.itemId);
    console.log(idItem);
    const deleteStatement = await item.deleteItem(idItem);
    if (deleteStatement) {
      res.redirect("/cart");
    } else {
      res.send("Can't delete this item!");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
    throw error;
  }
}
const cartController = {
  addItem,
  getCart,
  getCheckout,
  finishCheckout,
  delteItem,
};
export { cartController };

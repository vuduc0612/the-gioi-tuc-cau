import { admin } from "../models/admin.js";
import express from "express";

const app = express()

async function getAllBills(req, res) {
    let adminName = req.session.admin.username;
    console.log(req.session.admin.username);
    try {
        const result = await admin.getAllBills();
        // console.log(result);
        res.render('admin.ejs', {allBills: result, adminName: adminName});
    } catch (error) {
        res.status(500).send('Internal server error');
        throw error;
    }
}

async function getBillById(req, res) {
    let adminName = req.session.admin.username;
    try {
        if (!req.query.id) {
            return res.redirect('/');
        }

        const billId = req.query.id;
        const result = await admin.getBillById(billId);
        // console.log(result);
        res.render('adminBill.ejs', {billDatas: result, adminName: adminName});
    } catch (error) {
        res.status(500).send('Internal server error');
        throw error;
    }
}

async function getAllProducts(req, res) {
    let adminName = req.session.admin.username;
    try {
        const result = await admin.getAllProducts();
        // console.log(result);
        res.render('adminInventory.ejs', {datas: result, adminName: adminName});
    } catch (error) {
        res.status(500).send('Internal server error');
        throw error;
    }
}

async function getProductById(req, res) {
    let adminName = req.session.admin.username;
    try {
        if (!req.query.id) {
            return res.redirect('/');
        }

        const productId = req.query.id;
        const categoryDatas = await admin.getCategoryDatas();
        const inventoryDatas = await admin.getInventoryDatasByProductId(productId);
        const result = await admin.getProductById(productId);
        // console.log(inventoryDatas);
        res.render('adminProducts.ejs', {productDatas: result, categoryDatas: categoryDatas, inventoryDatasByProd: inventoryDatas, adminName: adminName});
    } catch (error) {
        res.status(500).send('Internal server error');
        throw error;
    }
}

async function updateProductInformation (req, res) {
    const formDatas = req.body;
    // console.log(formDatas);
    // res.redirect('/myInventory');
    try {
        const success = await admin.updateProductInformation(formDatas);
        if (success) {
            res.redirect('/myInventory');
        } else {
            res.status(400).send('Failed to update product');
        }
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Internal server error');
    }
}

async function loginAdmin(req, res) {
    const { username, password } = req.body;
    //console.log(req.body);
    try {
      const adminData = await admin.loginAdmin(username, password, req); // Truyền req vào loginUser để truy cập session
      if (adminData) {
        req.session.admin = adminData;
        res.redirect("/admin?successLog=true");
      } else {
        res.redirect("/admin?error=true");
      }
    } catch (error) {
      console.error("Error logging in user:", error);
      res.status(500).send("Internal server error");
    }
  }



const adminController = {loginAdmin, getAllBills, getBillById, getAllProducts, getProductById, updateProductInformation };
export { adminController};
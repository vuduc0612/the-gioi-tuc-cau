import { admin } from "../models/admin.js";
import express from "express";

const app = express()

async function getAllBills(req, res) {
    try {
        const result = await admin.getAllBills();
        console.log(result);
        res.render('admin.ejs', {allBills: result})
    } catch (error) {
        res.status(500).send('Internal server error');
        throw error;
    }
}

async function getBillById(req, res) {
    try {
        if (!req.query.id) {
            return res.redirect('/');
        }

        const billId = req.query.id;
        const result = await admin.getBillById(billId);
        console.log(result);
        res.render('admin.ejs')
    } catch (error) {
        res.status(500).send('Internal server error');
        throw error;
    }
}

async function getAllProducts(req, res) {
    try {
        const result = await admin.getAllProducts();
        console.log(result);
        res.render('admin.ejs')
    } catch (error) {
        res.status(500).send('Internal server error');
        throw error;
    }
}

async function getProductById(req, res) {
    try {
        if (!req.query.id) {
            return res.redirect('/');
        }

        const productId = req.query.id;
        const result = await admin.getProductById(productId);
        console.log(result);
        res.render('admin.ejs')
    } catch (error) {
        res.status(500).send('Internal server error');
        throw error;
    }
}

const adminController = { getAllBills, getBillById, getAllProducts, getProductById };
export { adminController};
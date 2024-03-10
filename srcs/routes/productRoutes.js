import express from "express";
const router = express.Router();
import {productController} from '../controllers/productController.js';

router.get('/', productController.getAllProducts);

export const productRoutes = router;

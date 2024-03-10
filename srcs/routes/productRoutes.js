import express from "express";
import { productController } from "../controllers/productController.js";

const router = express.Router();

router.get('/', productController.getAllProducts);
router.get("/category/soccer-shoes/nike/all", productController.getProductsByCategoryId);
router.get("/category/soccer-shoes/nike/:id", productController.getProductsById)

export const productRoutes = router;
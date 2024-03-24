import express from "express";
import { productController } from "../controllers/productController.js";

const router = express.Router();


router.get("/category/soccer-shoes/nike/all", productController.getAllProductsNike);
router.get("/category/soccer-shoes/nike/:id", productController.getProductsById);

router.get("/category/soccer-shoes/adidas/all", productController.getAllProductsAdidas);
router.get("/category/soccer-shoes/adidas/:id", productController.getProductsById);

router.get("/category/soccer-shoes/mizuno/all", productController.getAllProductsMizuno);
router.get("/category/soccer-shoes/mizuno/:id", productController.getProductsById);

router.get("/category/others/ball/all", productController.getAllProductsBall);
router.get("/category/others/ball/:id", productController.getProductsById);

router.get("/category/others/glove/all", productController.getAllProductsGlove);
router.get("/category/others/glove/:id", productController.getProductsById);

router.get("/category/others/sock/all", productController.getAllProductsSock);
router.get("/category/others/sock/:id", productController.getProductsById);

router.get("/category/others/tape/all", productController.getAllProductsTape);
router.get("/category/others/tape/:id", productController.getProductsById);

router.get("/search", productController.getProductsByKeyWord);


export const productRoutes = router;
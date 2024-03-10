import express from "express";
import { getProductsByCategoryId, getProductsById } from "../controllers/productController.js";

const router = express.Router();

router.get("/category/soccer-shoes/nike/all", async (req, res) => {
    try {
        const result = await getProductsByCategoryId(1);
        res.render("category.ejs", {
            datas: result,
            title: "Giày Đá Bóng NIKE",
        });
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});
router.get("/category/soccer-shoes/nike/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const result = await getProductsById(id);
        //console.log(result);
        res.render("detailProduct.ejs", {
            products: result,
        });
    } catch (error) {
        res.status(500).send('Internal server error');
    }
})
export default router;
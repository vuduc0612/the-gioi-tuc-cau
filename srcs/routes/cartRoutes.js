import express from "express";
import { cartController } from "../controllers/cartController.js";
const router = express.Router();

router.post('/cart', cartController.getCartData);
router.get('/cart', cartController.getCart);
router.get('/checkout', cartController.getCheckout);
router.post('/finishCheckout', cartController.finishCheckout);

router.get('/errorCheckout', async (req, res) => {
    try {
        res.render('errorCheckout');
    } catch (error) {
        res.status(500).send('Internal Server Error');
        throw error;
    }
});

export const cartRoutes = router;

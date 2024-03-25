import { adminController } from '../controllers/adminController.js';
import express from 'express';

const router = express.Router();

router.get("/myAdmin", adminController.getAllBills);
router.get("/myInventory", adminController.getAllProducts);
router.get("/myBill", adminController.getBillById);
router.get("/myProduct", adminController.getProductById);

export const adminRoutes = router;

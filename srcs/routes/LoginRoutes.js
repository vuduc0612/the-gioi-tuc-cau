import express from 'express';
import { LoginController } from '../controllers/LoginController.js';
import { product } from '../models/product.js';

const router = express.Router();

router.get('/',  LoginController.getHomePage);

router.get('/login', (req, res) => {
    res.render('login.ejs');
});

router.post('/register', LoginController.register);

router.post('/login', LoginController.login);

router.post('/logout', LoginController.logout);

export const LoginRoutes = router;
import express from 'express';
import { loginController } from '../controllers/loginController.js';
import { product } from '../models/product.js';

const router = express.Router();

router.get('/',  loginController.getHomePage);

router.get('/login', (req, res) => {
    res.render('login.ejs');
});

router.post('/register', loginController.register);

router.post('/login', loginController.login);

router.post('/', loginController.logout);

export const loginRoutes = router;

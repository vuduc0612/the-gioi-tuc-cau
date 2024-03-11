import express from 'express';
import bodyParser from 'body-parser';
import { registerUser, loginUser, log, curUser, status } from '../controllers/LoginController.js';

import { product } from '../models/product.js';
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

var curName = '';
var curStatus = '';
var logi = '';

// router.get('/', async(req, res) => {
//     const products = await product.getAllProducts();
//     res.render('home.ejs', {
        
//     });
// });
//router.get('/', productController.getAllProducts);
router.get('/',  async(req, res) => {
    curName = curUser;
    curStatus = status;
    logi = log;
    const products = await product.getAllProducts();
    res.render('home.ejs', { 
        curName, 
        curStatus, 
        logi,
        products: products,
    });
});

router.get('/login', (req, res) => {
    res.render('login.ejs');
});

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const success = await registerUser(username, email, password);
        if (success) {
            res.redirect('/login?successRes=true');
        } else {
            res.status(400).send('Failed to register user');
        }
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Internal server error');
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await loginUser(email, password);
        if (user) {
            res.redirect('/login?successLog=true');
        } else {
            res.redirect('/login?error=true');
        }
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).send('Internal server error');
    }
});

router.post('/logout', async(req, res) => {
    // Reset curUser và status về giá trị mặc định
    curName = '';
    curStatus = 'Đăng nhập';
    logi = '/login';
    const products = await product.getAllProducts();
    // Redirect người dùng về trang đăng nhập hoặc trang chính, tuỳ thuộc vào yêu cầu
    res.render('home.ejs', { curName, curStatus, logi, products });
});

export default router;

import express from 'express';
import { loginController } from '../controllers/loginController.js';

const router = express.Router();

router.get('/', loginController.getHomePage);

router.get('/login', (req, res) => {
    res.render('login.ejs');
});

router.get('/admin', (req, res) => {
    res.render('adminLogin.ejs');
});

router.post('/register', loginController.register);

router.post('/login', loginController.login);

router.post('/', loginController.logout); // Sửa từ '/' thành '/logout'

export const loginRoutes = router;

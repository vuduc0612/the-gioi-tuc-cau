import express from 'express';
import bodyParser from 'body-parser';
import { registerUser, loginUser, log, curUser, status } from '../controllers/LoginController.js';

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

var curName = '';
var curStatus = '';
var logi = '';

router.get('/', (req, res) => {
    res.render('home.ejs');
});

router.get('/home', (req, res) => {
    curName = curUser;
    curStatus = status;
    logi = log;
    res.render('home.ejs', { curName, curStatus, logi });
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

router.post('/logout', (req, res) => {
    // Reset curUser và status về giá trị mặc định
    curName = '';
    curStatus = 'Đăng nhập';
    logi = '/login';
    // Redirect người dùng về trang đăng nhập hoặc trang chính, tuỳ thuộc vào yêu cầu
    res.render('home.ejs', { curName, curStatus, logi });
});

router.use(bodyParser.json());



router.post('/selected-size', (req, res) => {
    const selectedSize = req.body.size;
    console.log('Kích thước được chọn:', selectedSize);
    // Xử lý dữ liệu và gửi phản hồi lại cho máy khách
    res.send('Dữ liệu kích thước đã nhận được.');
});


export default router;

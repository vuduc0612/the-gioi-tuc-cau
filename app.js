// import express from "express";
// import configViewEngine from "./srcs/configs/configEjs.js";
// import bodyParser from "body-parser";
// import { registerUser, loginUser, log, curUser, status } from "./utils/database.js";

// const port = 3000;
// const app = express();

// app.use(express.static("publics"));
// app.use(express.static("bootstrap"));
// app.use(bodyParser.urlencoded({ extended: true }));

// configViewEngine(app);

// app.get("/", (req, res) => {
//     res.render("home.ejs");
// })

// let curName = '';
// let curStatus = '';
// let logi = '';

// app.get("/home", (req, res) => {
//     curName = curUser;
//     curStatus = status;
//     logi = log;
//     res.render("home.ejs", {curName, curStatus, logi});
// })

// app.get("/login", (req, res) => {
//     res.render("login.ejs");
// })


// app.post('/register', async (req, res) => {
//     const { username, email, password } = req.body;
//     try {
//         const success = await registerUser(username, email, password);
//         if (success) {
//             res.redirect('/login?successRes=true');
//         } else {
//             res.status(400).send('Failed to register user');
//         }
//     } catch (error) {
//         console.error('Error registering user:', error);
//         res.status(500).send('Internal server error');
//     }
// });

// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await loginUser(email, password);
//         if (user) {
//             res.redirect('/login?successLog=true');
//         } else {
//             res.redirect('/login?error=true');
//         }
//     } catch (error) {
//         console.error('Error logging in user:', error);
//         res.status(500).send('Internal server error');
//     }
// });

// app.post('/logout', (req, res) => {
//     // Reset curUser và status về giá trị mặc định
//      curName = '';
//      curStatus = 'Đăng nhập';
//      logi = '/login';
//     // Redirect người dùng về trang đăng nhập hoặc trang chính, tuỳ thuộc vào yêu cầu
//     res.render("home.ejs", {curName, curStatus, logi});
// });

// app.listen(port, () => {
//     console.log(`Server is running on ${port}`);
// })

import express from 'express';
import configViewEngine from './srcs/configs/configEjs.js';
import routes from './srcs/routes/LoginRoutes.js';

const port = 3000;
const app = express();

app.use(express.static('publics'));
app.use(express.static('bootstrap'));
app.use('/', routes);

configViewEngine(app);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

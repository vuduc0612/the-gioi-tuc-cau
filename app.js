import express from "express";
import configViewEngine from "./srcs/configs/configEjs.js";
import bodyParser from "body-parser";
import { LoginRoutes } from "./srcs/routes/LoginRoutes.js";
import {productRoutes} from "./srcs/routes/productRoutes.js";
import { getCartData } from './srcs/models/cart.js';
import { getUserData } from "./srcs/models/user.js";

const port = 3000;
const app = express();

app.use(express.static("publics"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
configViewEngine(app);

app.use("/", LoginRoutes);
app.use("/", productRoutes);

app.post('/processData', (req, res) => {
    console.log('Received data:', req.body);
    // Xử lý dữ liệu và sau đó render trang EJS
    res.json(req.body);
});
app.get("/", (req, res) => {
    res.render("login.ejs");
})

// app.post("/register", (req, res) => {
//     console.log(req.body);
//     res.send("Hello");
// })

// Quan tasks
app.get('/cart', async (req, res) => {
    try {
        const cartData = await getCartData();
        res.render('cart', { cartData }); // Truyền dữ liệu vào template engine
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

app.get('/checkout', async (req, res) => {
    try {
        const cartData = await getCartData();
        const userData = await getUserData();
        res.render('checkout', { cartData, userData });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

app.get('/finishCheckout', async (req, res) => {
    try {
        res.render('finishCheckout');
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

app.get('/errorCheckout', async (req, res) => {
    try {
        res.render('errorCheckout');
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
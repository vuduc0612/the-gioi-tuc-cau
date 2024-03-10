import express from "express";
import configViewEngine from "./srcs/configs/configEjs.js";
import bodyParser from "body-parser";
// import { registerUser, loginUser } from "./utils/database.js";
import {productRoutes}  from './srcs/routes/productRoutes.js';

const port = 3000;
const app = express();

app.use(express.static("publics"));
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);

app.use('/home', productRoutes)

app.get("/", (req, res) => {
    res.render("login.ejs");
})


app.post("/register", (req, res) => {
    console.log(req.body);
    res.send("Hello");
})

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const success = await registerUser(username, email, password);
        if (success) {
            res.send('Registration successful');
        } else {
            res.status(400).send('Failed to register user');
        }
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Internal server error');
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await loginUser(email, password);
        if (user) {
            res.send('Login successful');
        } else {
            res.status(401).send('Invalid email or password');
        }
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).send('Internal server error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
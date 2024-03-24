

import express from "express";
import configViewEngine from "./srcs/configs/configEjs.js";
import bodyParser from "body-parser";
import session from 'express-session';
import { loginRoutes } from "./srcs/routes/loginRoutes.js";
import { productRoutes } from "./srcs/routes/productRoutes.js";
import { cartRoutes } from "./srcs/routes/cartRoutes.js";


const port = 3000;
const app = express();

app.use(express.static("publics"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: false
}));

configViewEngine(app);

app.use("/", loginRoutes);
app.use("/", productRoutes);
app.use("/", cartRoutes);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

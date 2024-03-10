import express from "express";
import configViewEngine from "./srcs/configs/configEjs.js";
import bodyParser from "body-parser";
import { getProductsByCategoryId, getProductsById } from "./srcs/controllers/productController.js";
import router from "./srcs/routes/productRoutes.js";

const port = 3000;
const app = express();

app.use(express.static("publics"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
configViewEngine(app);

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.use("/", router);

app.post('/processData', (req, res) => {
    console.log('Received data:', req.body);

    // Xử lý dữ liệu và sau đó render trang EJS
    res.json(req.body);
});
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
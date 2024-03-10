import express from "express";
import configViewEngine from "./srcs/configs/configEjs.js";
import bodyParser from "body-parser";

import {productRoutes} from "./srcs/routes/productRoutes.js";

const port = 3000;
const app = express();

app.use(express.static("publics"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
configViewEngine(app);


app.use("/", productRoutes);

app.post('/processData', (req, res) => {
    console.log('Received data:', req.body);

    // Xử lý dữ liệu và sau đó render trang EJS
    res.json(req.body);
});
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
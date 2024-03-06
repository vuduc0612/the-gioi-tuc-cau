import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();
app.use(express.static("publics"));

app.get("/", (req, res) => {
    res.render("category.ejs");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
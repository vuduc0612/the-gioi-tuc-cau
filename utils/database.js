
import sql from "mssql";
import express from "express";

const port = 3000;
const app = express();
// Cấu hình kết nối đến cơ sở dữ liệu
const config = {
    user: 'sa',
    password: '12345',
    server: 'localhost',
    database: 'the-gioi-tuc-cau',
    options: {
        encrypt: false // Sử dụng kết nối mã hóa
    }
};

// Tạo pool kết nối
const pool = new sql.ConnectionPool(config);
// Kết nối đến cơ sở dữ liệu
pool.connect()

app.get("/", async (req, res) => {
    const result = await pool.query("SELECT * FROM category");
    console.log(result.rows)
    console.log(1000);
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})

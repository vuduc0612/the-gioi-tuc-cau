import sql from "mssql";
import express from "express"
// Cấu hình kết nối đến cơ sở dữ liệu
// const port = 3000;
// const app = express();
// const config = {
//     user: 'sa',
//     password: '12345',
//     server: 'localhost',
//     database: 'the-gioi-tuc-cau',
//     options: {
//         encrypt: false // Sử dụng kết nối mã hóa
//     }
// };

// // Tạo pool kết nối
// const pool = new sql.ConnectionPool(config);

// // Kết nối đến cơ sở dữ liệu
// pool.connect().then(() => {
//     console.log('Connected to SQL Server');
// }).catch(err => {
//     console.error('Failed to connect to SQL Server', err);
// });

// app.get("/", async (req, res) => {
//     const result = await pool.query("SELECT * FROM product");
 
//     console.log(result.recordset);
//     res.json(result.recordset);
    
// });
// app.listen(port, ()=>{
//     console.log("ok");
// })
// export default pool;

// Cấu hình kết nối đến SQL Server
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
    .then(() => {
        console.log('Connected to SQL Server');
        // Gọi hàm để lấy dữ liệu từ bảng product
        getProductData();
    })
    .catch(err => {
        console.error('Failed to connect to SQL Server', err);
    });

// Hàm lấy dữ liệu từ bảng product
async function getProductData() {
    try {
        const request = pool.request();
        const result = await request.query('SELECT * FROM product');
        
        // Log dữ liệu
        console.log(result.recordset);
    } catch (error) {
        console.error('Error getting product data:', error);
    } finally {
        // Đóng kết nối sau khi lấy dữ liệu
        await pool.close();
    }
}

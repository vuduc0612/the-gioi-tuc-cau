import sql from "mssql";

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
pool.connect().then(() => {
    console.log('Connected to SQL Server');
    //getProductsByCategoryId(1)
}).catch(err => {
    console.error('Failed to connect to SQL Server', err);
});

export default pool;

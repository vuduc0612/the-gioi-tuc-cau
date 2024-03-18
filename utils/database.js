// database.js

import sql from "mssql";

const config = {
    user: 'admin',
    password: '23112003',
    server: 'localhost',
    database: 'tgtc.cj208wi82h20.ap-southeast-1.rds.amazonaws.com',
    options: {
        encrypt: false
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

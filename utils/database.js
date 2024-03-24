// database.js

import sql from "mssql";

const config = {
    user: 'tckadmin',
    password: 'Tckzeros11',
    server: 'tck.database.windows.net',
    database: 'the-gioi-tuc-cau',
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

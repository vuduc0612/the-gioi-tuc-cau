import sql from "mssql";

// Cấu hình kết nối đến cơ sở dữ liệu
const config = {
    user: 'sa',
    password: '123',
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
}).catch(err => {
    console.error('Failed to connect to SQL Server', err);
});

// async function registerUser(name, email, password) {
//     try {
//         const request = pool.request();
//         request.input('username', name);
//         request.input('email', email);
//         request.input('password', password);
//         const result = await request.query('INSERT INTO [user] (username, email, password) VALUES ( @username, @email, @password)');
//         return result.rowsAffected[0] > 0; // Trả về true nếu có bản ghi được thêm vào
//     } catch (error) {
//         console.error('Error registering user:', error);
//         throw error;
//     }
// }

// let log = '';
// let status = '';
// let curUser = '';

// async function loginUser(email, password) {
//     try {
//         const request = pool.request();
//         request.input('email', email);
//         request.input('password', password);
        
//         const result = await request.query('SELECT * FROM [user] WHERE email = @email AND password = @password');
        
//         if (result.recordset.length > 0) {
//             let user = result.recordset[0];
//             console.log("Email:", user.email);
//             console.log("Password:", user.password);
//             console.log("ID: ", user.user_id);
//             curUser = user.username;
//             status = 'Đăng xuất';
//             log = '/home';
//             return user; // Trả về thông tin người dùng nếu đăng nhập thành công
//         } else {
//             return null; // Trả về null nếu không tìm thấy người dùng
//         }
//     } catch (error) {
//         console.error('Error logging in user:', error);
//         throw error;
//     }
// }

// export {curUser, status, log};
// export {registerUser, loginUser};
export default pool;

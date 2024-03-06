import sql from "mssql";

// Cấu hình kết nối đến cơ sở dữ liệu
const config = {
    user: 'sa',
    password: '123',
    server: 'localhost',
    database: 'csdl-btl-web',
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

async function registerUser(name, email, password) {
    try {
        const request = pool.request();
        request.input('username', name);
        request.input('email', email);
        request.input('password', password);
        
        const result = await request.query('INSERT INTO [user] (user_id, username, email, password) VALUES (1, @username, @email, @password)');
        return result.rowsAffected[0] > 0; // Trả về true nếu có bản ghi được thêm vào
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}

async function loginUser(email, password) {
    try {
        const request = pool.request();
        request.input('email', email);
        request.input('password', password);
        
        const result = await request.query('SELECT * FROM [user] WHERE email = @email AND password = @password');
        return result.recordset[0]; // Trả về thông tin người dùng nếu đăng nhập thành công
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
}

export {registerUser, loginUser};
export default pool;

import pool from "../../utils/database.js";

let log = '';
let status = '';
let curUser = '';

async function registerUser(name, email, password) {
    try {
        const request = pool.request();
        request.input('username', name);
        request.input('email', email);
        request.input('password', password);
        const result = await request.query('INSERT INTO [user] (username, email, password) VALUES ( @username, @email, @password)');
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

        if (result.recordset.length > 0) {
            let user = result.recordset[0];
            console.log(user);
            console.log("Email:", user.email);
            console.log("Password:", user.password);
            console.log("ID: ", user.user_id);
            curUser = user.username;
            status = 'Đăng xuất';
            log = '/home';
            return user; // Trả về thông tin người dùng nếu đăng nhập thành công
        } else {
            return null; // Trả về null nếu không tìm thấy người dùng
        }
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
}

export { registerUser, loginUser };
export { curUser, status, log };

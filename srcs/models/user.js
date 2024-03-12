import pool from "../../utils/database.js";

var log = '';
var status = '';
var curUser = '';

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
            curUser = user.username;
            status = 'Đăng xuất';
            log = '/home';
            return user; // Trả về thông tin người dùng nếu đăng nhập thành công
        } else {
            console.log("Khong co data");
            return null; // Trả về null nếu không tìm thấy người dùng
        }
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
}
const user = {registerUser, loginUser }
export {user, curUser, status, log};// user.js

import { connectDatabase, closeDatabase, queryDatabase } from "../../utils/database.js";

const fetchData = async () => {
    try {
        await connectDatabase();

        const user_id = 1;
        const query = `SELECT [first_name],[last_name],[email],[phone],[address] FROM [user] WHERE [user_id]=${user_id};`;

        // Sử dụng await để đợi Promise trả về
        const result = await queryDatabase(query);

        return result;
    } catch (error) {
        console.error('Error fetching data from database:', error);
    } finally {
        await closeDatabase();
    }
};

// Gọi hàm để lấy dữ liệu
const getUserData = async () => {
    const userData = await fetchData();
    
    // Kiểm tra xem cartData có dữ liệu hay không trước khi sử dụng forEach
    if (userData) {
        return userData;
    } else {
        console.log('No data available');
    }
};

export {getUserData}
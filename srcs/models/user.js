// user.js

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

import pool from "../../utils/database.js";


var status = '';
var user_name = '';
var user_id = 0, cart_id = 0;
var cart_status = 0;

async function registerUser(name, email, password) {
    try {
        const request = pool.request();
        request.input('username', name);
        request.input('email', email);
        request.input('password', password);
        //Thêm người dùng và thêm giỏ giàng cho người dùng.
        const result = await request.query('INSERT INTO [user] (username, email, password) VALUES ( @username, @email, @password);'+ 
                                            '\nDECLARE @newUserId INT;' +
                                            '\nSET @newUserId = SCOPE_IDENTITY();' +
                                            '\nINSERT INTO cart  VALUES ( @newUserId, 0.00, 0);');
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
        //Lấy user và cart 
        const result = await request.query('SELECT U.*, cart.cart_id, cart.total_price, cart.cart_status from' +
                    '\n(SELECT * FROM [user] WHERE email = @email AND password = @password) as u' +
                    '\nINNER JOIN cart ON U.user_id = cart.user_id WHERE cart.cart_status = 0;');
        //console.log(result.recordset);
        if (result.recordset.length > 0) {
            let user = result.recordset[0];
            //console.log(user);
            user_name = user.username;
            user_id = user.user_id;
            cart_id = user.cart_id;
            cart_status = user.cart_status;
            status = 'Đăng xuất';
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
async function getUserById(id){
    try {
        const request = pool.request();
        request.input("id", id);
        const result = await request.query("SELECT * FROM [user] WHERE [user_id]=@id;");
        if(result){
            //console.log(result);
            return result.recordset[0];
        }
        else{
            return null;
        }
    } catch (error) {
        console.error('Error getting user by id:', error);
        throw error;
    }
}
async function updateUser(firstName, lastName, address, phoneNumber, userId){
    try {
        const request = pool.request();
        request.input("firstName", firstName);
        request.input("lastName", lastName);
        request.input("address", address);
        request.input("phoneNumber", phoneNumber);
        request.input("userId", userId);
        const statement = await request.query(` UPDATE [user]
            SET first_name = @firstName, last_name = @lastName, address = @address, phone = @phoneNumber
            WHERE user_id = @userId`);
        return statement.rowsAffected[0] > 0;
        
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}
const user = {registerUser, loginUser, getUserById, updateUser };
export {user, user_name, status, user_id, cart_id, cart_status};

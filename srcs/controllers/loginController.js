import { user } from "../models/user.js";
import { product } from "../models/product.js";

async function getHomePage(req, res) {
  try {
    const products = await product.getAllProducts();
    let userName = "";
    let userId = 0;
    let userStatus = "";
    let cartId = 0;

    if (req.session.user) {
      userName = req.session.user.username;
      userId = req.session.user.userid;
      userStatus = req.session.user.user_status;
      cartId = req.session.user.cart_id;
    }

    res.render("home.ejs", {
      userName,
      userId,
      userStatus,
      cartId,
      products: products || [], // Sử dụng một mảng rỗng nếu không có sản phẩm
    });
  } catch (error) {
    console.error("Error getting home page:", error);
    res.status(500).send("Internal server error");
  }
}

async function register(req, res) {
  const { username, email, password } = req.body;
  //console.log(req.body);
  try {
    const success = await user.registerUser(username, email, password);
    if (success) {
      res.redirect("/login?successRes=true");
    } else {
      res.status(400).send("Failed to register user");
    }
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Internal server error");
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  //console.log(req.body);
  try {
    const userData = await user.loginUser(email, password, req); // Truyền req vào loginUser để truy cập session
    if (userData) {
      req.session.user = userData;
      res.redirect("/login?successLog=true");
    } else {
      res.redirect("/login?error=true");
    }
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).send("Internal server error");
  }
}

async function logout(req, res) {
  req.session.destroy();
  res.redirect("/");
}

const loginController = {
  getHomePage,
  register,
  login,
  logout,
};

export { loginController };

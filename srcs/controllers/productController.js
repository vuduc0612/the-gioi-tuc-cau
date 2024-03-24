import { product } from "../models/product.js";


let userName = "";
let userStatus = "Đăng nhập";
let userId = "0";
let cartId = "0";
async function getAllProductsNike(req, res) {
  const key = req.query.orderBy;
  try {
    if (req.session.user) {
      console.log('nike');
      userName = req.session.user.username;
      userId = req.session.user.user_id;
      cartId = req.session.user.cart_id;
      userStatus = "Đăng xuất";
    } else {
      userName = "";
      userStatus = "Đăng nhập";
      userId = "0";
      cartId = "0";
    } // Truy cập dữ liệu người dùng từ session
    var result;
    if(key === "lowToHigh"){
      result = await product.getProductsByCategoryIdOrderByLowToHigh(1);
    }
    else if(key == "highToLow"){
      result = await product.getProductsByCategoryIdOrderByHighToLow(1);
    }
    else{
      result = await product.getProductsByCategoryId(1);
    }
    res.render("category.ejs", {
      datas: result,
      title: "Giày Đá Bóng NIKE",
      userName: userName, // Sử dụng dữ liệu người dùng từ session
      userStatus: userStatus,
      opt: key,
    });
  } catch (error) {
    res.status(500).send("Internal server error");
    throw error;
  }
}
async function getAllProductsAdidas(req, res) {
  const key = req.query.orderBy;
  try {
    if (req.session.user) {
      userName = req.session.user.username;
      userId = req.session.user.user_id;
      cartId = req.session.user.cart_id;
      userStatus = "Đăng xuất";
    } else {
      userName = "";
      userStatus = "Đăng nhập";
      userId = "0";
      cartId = "0";
    }
    var result;
    if(key === "lowToHigh"){
      result = await product.getProductsByCategoryIdOrderByLowToHigh(2);
    }
    else if(key == "highToLow"){
      result = await product.getProductsByCategoryIdOrderByHighToLow(2);
    }
    else{
      result = await product.getProductsByCategoryId(2);
    }
    res.render("category.ejs", {
      datas: result,
      title: "Giày Đá Bóng ADIDAS",
      userName,
      userStatus,
      opt: key,
    });
  } catch (error) {
    res.status(500).send("Internal server error");
    throw error;
  }
}
async function getAllProductsMizuno(req, res) {
  const key = req.query.orderBy;
  try {
    if (req.session.user) {
      userName = req.session.user.username;
      userId = req.session.user.user_id;
      cartId = req.session.user.cart_id;
      userStatus = "Đăng xuất";
    } else {
      userName = "";
      userStatus = "Đăng nhập";
      userId = "0";
      cartId = "0";
    }
    var result;
    if(key === "lowToHigh"){
      result = await product.getProductsByCategoryIdOrderByLowToHigh(3);
    }
    else if(key == "highToLow"){
      result = await product.getProductsByCategoryIdOrderByHighToLow(3);
    }
    else{
      result = await product.getProductsByCategoryId(3);
    }
    res.render("category.ejs", {
      datas: result,
      title: "Giày Đá Bóng MIZUNO",
      userName,
      userStatus,
      opt: key,
    });
  } catch (error) {
    res.status(500).send("Internal server error");
    throw error;
  }
}
async function getAllProductsBall(req, res) {
  const key = req.query.orderBy;
  try {
    if (req.session.user) {
      userName = req.session.user.username;
      userId = req.session.user.user_id;
      cartId = req.session.user.cart_id;
      userStatus = "Đăng xuất";
    } else {
      userName = "";
      userStatus = "Đăng nhập";
      userId = "0";
      cartId = "0";
    }
    var result;
    if(key === "lowToHigh"){
      result = await product.getProductsByCategoryIdOrderByLowToHigh(4);
    }
    else if(key == "highToLow"){
      result = await product.getProductsByCategoryIdOrderByHighToLow(4);
    }
    else{
      result = await product.getProductsByCategoryId(4);
    }
    res.render("category.ejs", {
      datas: result,
      title: "Bóng Đá",
      userName,
      userStatus,
      opt: key,
    });
  } catch (error) {
    res.status(500).send("Internal server error");
    throw error;
  }
}
async function getAllProductsGlove(req, res) {
  const key = req.query.orderBy;
  try {
    if (req.session.user) {
      userName = req.session.user.username;
      userId = req.session.user.user_id;
      cartId = req.session.user.cart_id;
      userStatus = "Đăng xuất";
    } else {
      userName = "";
      userStatus = "Đăng nhập";
      userId = "0";
      cartId = "0";
    }
    var result;
    if(key === "lowToHigh"){
      result = await product.getProductsByCategoryIdOrderByLowToHigh(5);
    }
    else if(key == "highToLow"){
      result = await product.getProductsByCategoryIdOrderByHighToLow(5);
    }
    else{
      result = await product.getProductsByCategoryId(5);
    }
    res.render("category.ejs", {
      datas: result,
      title: "Găng tay",
      userName,
      userStatus,
      opt: key,
    });
  } catch (error) {
    res.status(500).send("Internal server error");
    throw error;
  }
}
async function getAllProductsSock(req, res) {
  const key = req.query.orderBy;
  try {
    if (req.session.user) {
      userName = req.session.user.username;
      userId = req.session.user.user_id;
      cartId = req.session.user.cart_id;
      userStatus = "Đăng xuất";
    } else {
      userName = "";
      userStatus = "Đăng nhập";
      userId = "0";
      cartId = "0";
    }
    var result;
    if(key === "lowToHigh"){
      result = await product.getProductsByCategoryIdOrderByLowToHigh(6);
    }
    else if(key == "highToLow"){
      result = await product.getProductsByCategoryIdOrderByHighToLow(6);
    }
    else{
      result = await product.getProductsByCategoryId(6);
    }
    res.render("category.ejs", {
      datas: result,
      title: "Tất chân",
      userName,
      userStatus,
      opt: key,
    });
  } catch (error) {
    res.status(500).send("Internal server error");
    throw error;
  }
}
async function getAllProductsTape(req, res) {
  const key = req.query.orderBy;
  try {
    if (req.session.user) {
      userName = req.session.user.username;
      userId = req.session.user.user_id;
      cartId = req.session.user.cart_id;
      userStatus = "Đăng xuất";
    } else {
      userName = "";
      userStatus = "Đăng nhập";
      userId = "0";
      cartId = "0";
    }
    var result;
    if(key === "lowToHigh"){
      result = await product.getProductsByCategoryIdOrderByLowToHigh(7);
    }
    else if(key == "highToLow"){
      result = await product.getProductsByCategoryIdOrderByHighToLow(7);
    }
    else{
      result = await product.getProductsByCategoryId(7);
    }
    res.render("category.ejs", {
      datas: result,
      title: "Băng keo",
      userName,
      userStatus,
      opt: key,
    });
  } catch (error) {
    res.status(500).send("Internal server error");
    throw error;
  }
}
async function getProductsById(req, res) {
   
  try {
    if (req.session.user) {
      //console.log('san pham');
      userName = req.session.user.username;
      userId = req.session.user.user_id;
      cartId = req.session.user.cart_id;
      userStatus = "Đăng xuất";
    } else {
      userName = "";
      userStatus = "Đăng nhập";
      userId = "0";
      cartId = "0";
    } // Truy cập dữ liệu người dùng từ session
    const id = parseInt(req.params.id);
    const result = await product.getProductsById(id);
    res.render("detailProduct.ejs", {
      products: result,
      userName: userName, // Sử dụng dữ liệu người dùng từ session
      userStatus: userStatus,
    });
  } catch (error) {
    res.status(500).send("Internal server error");
    throw error;
  }
}
async function getProductsByKeyWord(req, res) {
    try {
        userName = loginController.getUser().userName;
        userStatus = loginController.getUser().userStatus;
        const keyWord = req.query.q;
        const result = await product.getProductsByKeyWord(keyWord);
        //console.log(result);
        res.render("category.ejs", {
            datas: result,
            title: "Kết quả tìm kiếm",
            userName,
            userStatus,
        });
    } catch (error) {
        res.status(500).send('Internal server error');
        throw error;
    }
}

const productController = {
  getAllProductsNike,
  getAllProductsAdidas,
  getAllProductsMizuno,
  getAllProductsBall,
  getAllProductsGlove,
  getAllProductsSock,
  getAllProductsSock,
  getAllProductsTape,
  getProductsById,
  getProductsByKeyWord
};
export { productController };

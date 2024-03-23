// import { product } from "../models/product.js";
// import { loginController } from "./oginController.js";

// var userName = '';
// var userStatus = '';
// async function getProductsByCategoryId(req, res) {
//     try {
//         userName = loginController.getUser().userName;
//         userStatus = loginController.getUser().userStatus;
//         const result = await product.getProductsByCategoryId(1);
//         //console.log(result);
//         res.render("category.ejs", {
//             datas: result,
//             title: "Giày Đá Bóng NIKE",
//             userName,
//             userStatus,
//         });
//     } catch (error) {
//         res.status(500).send('Internal server error');
//         throw error;
//     }
// }
// async function getProductsById(req, res) {
//     try {
//         userName = loginController.getUser().userName;
//         userStatus = loginController.getUser().userStatus;
//         const id = parseInt(req.params.id);
//         const result = await product.getProductsById(id);
//         //console.log(result);
//         res.render("detailProduct.ejs", {
//             products: result,
//             userName,
//             userStatus,
//         });
//     } catch (error) {
//         res.status(500).send('Internal server error');
//         throw error;
//     }
// }
// const productController = { getProductsByCategoryId, getProductsById };
// export { productController };
import { product } from "../models/product.js";

let userName = "";
let userStatus = "Đăng nhập";
let userId = "0";
let cartId = "0";
async function getAllProductsNike(req, res) {
    
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
    const result = await product.getProductsByCategoryId(1);
    res.render("category.ejs", {
      datas: result,
      title: "Giày Đá Bóng NIKE",
      userName: userName, // Sử dụng dữ liệu người dùng từ session
      userStatus: userStatus,
    });
  } catch (error) {
    res.status(500).send("Internal server error");
    throw error;
  }
}
async function getAllProductsAdidas(req, res) {
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
    const result = await product.getProductsByCategoryId(2);
    //console.log(result);
    res.render("category.ejs", {
      datas: result,
      title: "Giày Đá Bóng ADIDAS",
      userName,
      userStatus,
    });
  } catch (error) {
    res.status(500).send("Internal server error");
    throw error;
  }
}
async function getAllProductsMizuno(req, res) {
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
    const result = await product.getProductsByCategoryId(3);
    //console.log(result);
    res.render("category.ejs", {
      datas: result,
      title: "Giày Đá Bóng MIZUNO",
      userName,
      userStatus,
    });
  } catch (error) {
    res.status(500).send("Internal server error");
    throw error;
  }
}
async function getAllProductsBall(req, res) {
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
    const result = await product.getProductsByCategoryId(4);
    //console.log(result);
    res.render("category.ejs", {
      datas: result,
      title: "Bóng Đá",
      userName,
      userStatus,
    });
  } catch (error) {
    res.status(500).send("Internal server error");
    throw error;
  }
}
async function getAllProductsGlove(req, res) {
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
    const result = await product.getProductsByCategoryId(5);
    //console.log(result);
    res.render("category.ejs", {
      datas: result,
      title: "Găng tay",
      userName,
      userStatus,
    });
  } catch (error) {
    res.status(500).send("Internal server error");
    throw error;
  }
}
async function getAllProductsSock(req, res) {
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
    const result = await product.getProductsByCategoryId(6);
    //console.log(result);
    res.render("category.ejs", {
      datas: result,
      title: "Tất chân",
      userName,
      userStatus,
    });
  } catch (error) {
    res.status(500).send("Internal server error");
    throw error;
  }
}
async function getAllProductsTape(req, res) {
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
    const result = await product.getProductsByCategoryId(7);
    //console.log(result);
    res.render("category.ejs", {
      datas: result,
      title: "Băng keo",
      userName,
      userStatus,
    });
  } catch (error) {
    res.status(500).send("Internal server error");
    throw error;
  }
}
async function getProductsById(req, res) {
   
  try {
    if (req.session.user) {
        console.log('san pham');
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
};
export { productController };

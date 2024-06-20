const productController = require("../controllers/product");
const authController = require("../controllers/auth");
const express = require("express");
const router = express.Router();

router.post("/api/addproduct", productController.addProduct);
router.post("/api/addproducts", productController.addAllProduct);
router.get("/api/getproducts", productController.getAllProduct);
router.post(
  "/api/addtocart",
  authController.fetchUser,
  productController.addToCart
);
router.post(
  "/api/removecart",
  authController.fetchUser,
  productController.removeFromCart
);
module.exports = router;

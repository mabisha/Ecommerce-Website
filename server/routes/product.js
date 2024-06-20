const productController = require("../controllers/product");
const express = require("express");
const router = express.Router();

router.post("/api/addproduct", productController.addProduct);
router.post("/api/addproducts", productController.addAllProduct);
module.exports = router;

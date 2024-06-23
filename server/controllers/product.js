const { where } = require("sequelize");
const db = require("../sequelize/models");
const Product = db.Product;
const User = db.User;

module.exports = {
  addProduct: async (req, res) => {
    try {
      const {
        product_id,
        path,
        type,
        newPrice,
        oldPrice,
        title,
        category,
        star,
        desc,
      } = req.body;

      const newProduct = await Product.create({
        product_id,
        path,
        type,
        newPrice,
        oldPrice,
        title,
        category,
        star,
        desc,
      });
      res.status(200).json({
        success: true,
        message: "sucess in adding a product",
        product: newProduct,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, errors: "Fail to add a product" });
    }
  },
  addAllProduct: async (req, res) => {
    try {
      const products = req.body;
      const newProduct = await Promise.all(
        products.map(async (product) => {
          const {
            product_id,
            path,
            type,
            newPrice,
            oldPrice,
            title,
            category,
            star,
            desc,
          } = product;
          return Product.create({
            product_id,
            path,
            type,
            newPrice,
            oldPrice: oldPrice ? oldPrice : null,
            title,
            category,
            star,
            desc,
          });
        })
      );
      res.status(200).json({
        success: true,
        message: "Success in adding products",
        product: newProduct,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, errors: error });
    }
  },
  getAllProduct: async (req, res) => {
    try {
      const products = await Product.findAll({
        order: [["product_id", "ASC"]],
      });
      res.send(products);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, errors: "Failed to retrieve products" });
    }
  },
  addToCart: async (req, res) => {
    try {
      console.log("added", req.body.itemId);
      let userData = await User.findOne({
        where: {
          id: req.user.id,
        },
      });
      userData.cartData[req.body.itemId] += 1;
      await User.update(
        { cartData: userData.cartData },
        {
          where: {
            id: req.user.id,
          },
        }
      );
      res.status(200).json({
        success: true,
        message: "Item added to cart",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, errors: error });
    }
  },
  removeFromCart: async (req, res) => {
    try {
      console.log("removed", req.body.itemId);
      let userData = await User.findOne({
        where: {
          id: req.user.id,
        },
      });
      if (userData.cartData[req.body.itemId] > 0)
        userData.cartData[req.body.itemId] -= 1;
      await User.update(
        { cartData: userData.cartData },
        {
          where: {
            id: req.user.id,
          },
        }
      );
      res.status(200).json({
        success: true,
        message: "Item removed to cart",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, errors: error });
    }
  },
  getAllCart: async (req, res) => {
    console.log("GetCart");
    let userData = await User.findOne({
      where: {
        id: req.user.id,
      },
    });
    res.json(userData.cartData);
  },
};

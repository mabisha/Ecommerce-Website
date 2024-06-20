const db = require("../sequelize/models");
const Product = db.Product;

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
      res.status(500).json({ success: false, errors: "Fail to add products" });
    }
  },
};

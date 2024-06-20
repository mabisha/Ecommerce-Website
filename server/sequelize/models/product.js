"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      path: DataTypes.STRING,
      type: DataTypes.STRING,
      newPrice: DataTypes.INTEGER,
      oldPrice: DataTypes.INTEGER,
      title: DataTypes.STRING,
      category: DataTypes.STRING,
      star: DataTypes.INTEGER,
      desc: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};

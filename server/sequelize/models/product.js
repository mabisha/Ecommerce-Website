'use strict';
const {
  Model
} = require('sequelize');
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
  Product.init({
    path: DataTypes.STRING,
    type: DataTypes.STRING,
    newPrice: DataTypes.INTEGER,
    oldprice: DataTypes.INTEGER,
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    star: DataTypes.INTEGER,
    desc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
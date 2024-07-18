require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_DATABASE } = process.env;
const ProductsModel = require('./models/products');
const IngredientsModel = require('./models/ingredients');
const UsersModel = require('./models/users');
const SalesModel = require('./models/sales');

const sequelize = new Sequelize(
  DB_DATABASE
);

ProductsModel(sequelize);
IngredientsModel(sequelize);
UsersModel(sequelize);
SalesModel(sequelize);

const { product, ingredient, user, sale } = sequelize.models;

product.belongsToMany(ingredient, { through: "product_ingredient" });
ingredient.belongsToMany(product, { through: "product_ingredient" });

product.belongsToMany(sale, { through: "sale_product" });
sale.belongsToMany(product, { through: "sale_product" });

module.exports = {
  product,
  ingredient,
  user,
  sale,
  conn: sequelize,
};
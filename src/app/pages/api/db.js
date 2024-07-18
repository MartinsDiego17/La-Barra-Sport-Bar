require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_DATABASE } = process.env;
const ProductsModel = require('./models/products');
const IngredientsModel = require('./models/ingredients');
const UsersModel = require('./models/users');
const SalesModel = require('./models/sales');

const DB_HOST = "postgresql://postgres.mpzdhwonlzymergalvmc:Olakease05*@aws-0-us-east-1.pooler.supabase.com:6543/postgres";
const DB_PORT = 5432;
const DB_NAME = "La-Barra";
const DB_USER = "MartinsDiego17";
const DB_PASSWORD = "Olakease0518";

const sequelize = new Sequelize(
  DB_HOST
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
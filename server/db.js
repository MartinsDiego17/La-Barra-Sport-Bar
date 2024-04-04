require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const ProductsModel = require('./models/products');
const IngredientsModel = require('./models/ingredients');

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/labarra`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

ProductsModel(sequelize);
IngredientsModel(sequelize);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { product, ingredient } = sequelize.models;
product.belongsToMany(ingredient, { through: "product_ingredient" });
ingredient.belongsToMany(product, { through: "product_ingredient" });

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

module.exports = {
  product,
  ingredient, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
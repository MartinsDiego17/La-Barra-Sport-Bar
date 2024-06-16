const { Router } = require('express');
const handlerGetProducts = require('../handlers/handlerGetProducts');
const handlerCreateProduct = require('../handlers/handlerCreateProduct');
const handlerGetByName = require('../handlers/handlerGetByName');
const handlerDeleteProduct = require('../handlers/handlerDeleteProduct');
const handlerUpdateProduct = require('../handlers/handlerUpdateProduct');
const handlerCreateIngredient = require('../handlers/handlerCreateIngredient');
const handlerGetIngredients = require('../handlers/handlerGetIngredients');
const handlerGetUsers = require('../handlers/handlerGetUsers');
const handlerCreateUser = require('../handlers/handlerCreateUser');
const handlerDeleteUser = require('../handlers/handlerDeleteUser');
const handlerUserById = require('../handlers/handlerUserByName');
const handlerUpdateUser = require('../handlers/handlerUpdateUser');
const handlerCreateSale = require('../handlers/handlerCreateSale');
const handlerGetSales = require('../handlers/handlerGetSales');
const handlerDeleteSales = require('../handlers/handlerDeleteSales');
const handlerSaleById = require('../handlers/handlerSaleById');

const router = Router();

router.get('/getProducts', handlerGetProducts);
router.get('/getProducts/:name', handlerGetByName);
router.get('/getUsers/:id', handlerUserById);
router.get('/getIngredients', handlerGetIngredients);
router.get('/getUsers', handlerGetUsers);
router.get('/getSales', handlerGetSales);
router.get('/getSales/:id', handlerSaleById);

router.post('/product', handlerCreateProduct);
router.post('/ingrediente', handlerCreateIngredient);
router.post('/user', handlerCreateUser);
router.post('/sale', handlerCreateSale);

router.delete('/product/delete/:id', handlerDeleteProduct);
router.delete('/user/delete/:id', handlerDeleteUser);
router.delete('/deleteSales', handlerDeleteSales);

router.put('/product/update/:id', handlerUpdateProduct);
router.put('/user/update/:id', handlerUpdateUser);

module.exports = router;

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
const handlerCreatePreference = require('../handlers/handlerCreatePreference');
const handlerWebhook = require('../handlers/handlerWebhook');

const router = Router();

router.get('/api/getProducts', handlerGetProducts);
router.get('/api/getProducts/:name', handlerGetByName);
router.get('/api/getUsers', handlerGetUsers);
router.get('/api/getUsers/:id', handlerUserById);
router.get('/api/getSales', handlerGetSales);
router.get('/api/getSales/:id', handlerSaleById);
router.get('/api/getIngredients', handlerGetIngredients);

router.post('/api/product', handlerCreateProduct);
router.post('/api/ingrediente', handlerCreateIngredient);
router.post('/api/user', handlerCreateUser);
router.post('/api/sale', handlerCreateSale);
router.post('/api/create_preference', handlerCreatePreference);
router.post('/api/webhook', handlerWebhook);

router.delete('/api/product/delete/:id', handlerDeleteProduct);
router.delete('/api/user/delete/:id', handlerDeleteUser);
router.delete('/api/deleteSales', handlerDeleteSales);

router.put('/api/product/update/:id', handlerUpdateProduct);
router.put('/api/user/update/:id', handlerUpdateUser);

module.exports = router;

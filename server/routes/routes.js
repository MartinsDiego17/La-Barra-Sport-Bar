const { Router } = require('express');
const handlerGetProducts = require('../handlers/handlerGetProducts');
const handlerCreateProduct = require('../handlers/handlerCreateProduct');
const handlerGetByName = require('../handlers/handlerGetByName');
const handlerDeleteProduct = require('../handlers/handlerDeleteProduct');
const handlerUpdateProduct = require('../handlers/handlerUpdateProduct');
const handlerCreateIngredient = require('../handlers/handlerCreateIngredient');
const handlerGetIngredients = require('../handlers/handlerGetIngredients');

const router = Router();

router.get('/getProducts', handlerGetProducts);
router.get('/getProducts/:name', handlerGetByName);
router.get('/getIngredients', handlerGetIngredients);
router.post('/product', handlerCreateProduct);
router.delete('/product/delete/:id', handlerDeleteProduct);
router.put("/product/update/:id", handlerUpdateProduct);
router.post("/ingrediente", handlerCreateIngredient);

module.exports = router;

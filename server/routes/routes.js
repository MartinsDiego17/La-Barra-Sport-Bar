const { Router } = require('express');
const handlerGetProducts = require('../handlers/handlerGetProducts'); 
const handlerCreateProduct = require('../handlers/handlerCreateProduct');
const handlerGetByName = require('../handlers/handlerGetByName');
const handlerDeleteProduct = require('../handlers/handlerDeleteProduct');

const router = Router();

router.get('/getProducts', handlerGetProducts);
router.get('/getProducts/:name', handlerGetByName);
router.post('/product', handlerCreateProduct);
router.delete('/product/delete/:id', handlerDeleteProduct);

module.exports = router;

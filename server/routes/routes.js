const { Router } = require('express');
const handlerGetProducts = require('../handlers/handlerGetProducts'); // Importa directamente
const handlerCreateProduct = require('../handlers/handlerCreateProduct');
const handlerGetByName = require('../handlers/handlerGetByName');

const router = Router();

router.get('/getProducts', handlerGetProducts);
router.get('/getProducts/:name', handlerGetByName);
router.post('/product', handlerCreateProduct);


module.exports = router;

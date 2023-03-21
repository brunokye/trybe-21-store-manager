const express = require('express');

const { productsController } = require('../controllers');
const validateProductName = require('../middlewares/validateProductName');

const router = express.Router();

const { listProducts, getProduct, createProduct } = productsController;

router.get('/', listProducts);
router.get('/:id', getProduct);
router.post('/', validateProductName, createProduct);

module.exports = router;
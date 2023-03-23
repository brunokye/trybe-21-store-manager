const express = require('express');

const { productsController } = require('../controllers');
const validateProductName = require('../middlewares/validateProductName');

const router = express.Router();

const { listProducts, getProduct,
  createProduct, updateProduct } = productsController;

router.get('/', listProducts);
router.get('/:id', getProduct);
router.post('/', validateProductName, createProduct);
router.put('/:id', validateProductName, updateProduct);

module.exports = router;
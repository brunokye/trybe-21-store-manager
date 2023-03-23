const express = require('express');

const { productsController } = require('../controllers');
const validateProductName = require('../middlewares/validateProductName');

const router = express.Router();

const { listProducts, getProduct, createProduct,
  updateProduct, removeProduct } = productsController;

router.get('/', listProducts);
router.get('/:id', getProduct);
router.post('/', validateProductName, createProduct);
router.put('/:id', validateProductName, updateProduct);
router.delete('/:id', removeProduct);

module.exports = router;
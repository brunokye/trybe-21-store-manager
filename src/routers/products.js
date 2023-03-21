const express = require('express');

const { productsController } = require('../controllers');

const router = express.Router();

const { listProducts, getProduct } = productsController;

router.get('/', listProducts);
router.get('/:id', getProduct);

module.exports = router;
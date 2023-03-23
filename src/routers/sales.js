const express = require('express');

const { salesController } = require('../controllers');

const router = express.Router();

const { listSales, getSale } = salesController;

router.get('/', listSales);
router.get('/:id', getSale);

module.exports = router;
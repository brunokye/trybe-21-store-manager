const { salesModel } = require('../models');
const { validateId } = require('./validations/validateInfo');

const findAll = async () => {
  const sales = await salesModel.findAll();
  return { type: null, message: sales };
};

const findById = async (saleId) => {
  const error = await validateId(saleId);
  if (error.type) return error;

  const sale = await salesModel.findById(saleId);
  if (sale.length < 1) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };

  return { type: null, message: sale };
};

module.exports = {
  findAll,
  findById,
};
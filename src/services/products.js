const { productsModel } = require('../models');
const { validateId, validateName } = require('./validations/validateInfo');

const findAll = async () => {
  const products = await productsModel.findAll();
  return { type: null, message: products };
};

const findById = async (productId) => {
  const error = await validateId(productId);
  if (error.type) return error;

  const product = await productsModel.findById(productId);

  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: product };
};

const createProduct = async (name) => {
  const error = await validateName(name);
  if (error.type) return error;

  const newProductId = await productsModel.insert({ name });
  const newProduct = await productsModel.findById(newProductId);

  return { type: null, message: newProduct };
};

const updateProduct = async (productId, productName) => {
  const product = await productsModel.findById(productId);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  const error = await validateName(productName);
  if (error.type) return error;

  const updatedProduct = await productsModel.update(productId, productName);
  return { type: null, message: updatedProduct };
};

const removeProduct = async (productId) => {
  const error = await validateId(productId);
  if (error.type) return error;

  const removedProduct = await productsModel.remove(productId);
  const { affectedRows } = removedProduct;

  if (!affectedRows) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: removedProduct };
};

module.exports = {
  findAll,
  findById,
  createProduct,
  updateProduct,
  removeProduct,
};
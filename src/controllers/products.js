const { productsService } = require('../services');
const { mapError } = require('../utils/errorMap');

const listProducts = async (_req, res) => {
  const { type, message } = await productsService.findAll();

  if (type) return res.status(mapError(type)).json({ message });
  res.status(200).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findById(id);

  if (type) return res.status(mapError(type)).json({ message });
  res.status(200).json(message);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productsService.createProduct(name);

  if (type) return res.status(mapError(type)).json({ message });
  res.status(201).json(message);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  
  const { type, message } = await productsService.updateProduct(id, name);
  if (type) return res.status(mapError(type)).json({ message });

  const result = await productsService.findById(id);
  res.status(200).json(result.message);
};

const removeProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.removeProduct(id);

  if (type) return res.status(mapError(type)).json({ message });
  res.status(204).json();
};

module.exports = {
  listProducts,
  getProduct,
  createProduct,
  updateProduct,
  removeProduct,
};
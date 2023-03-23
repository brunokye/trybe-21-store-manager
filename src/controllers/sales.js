const { salesService } = require('../services');
const { mapError } = require('../utils/errorMap');

const listSales = async (_req, res) => {
  const { type, message } = await salesService.findAll();

  if (type) return res.status(mapError(type)).json({ message });
  res.status(200).json(message);
};

const getSale = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.findById(id);

  if (type) return res.status(mapError(type)).json({ message });
  res.status(200).json(message);
};

module.exports = {
  listSales,
  getSale,
};
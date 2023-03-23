const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products ORDER BY id',
  );

  return result;
};

const findById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ? ORDER BY id',
    [productId],
  );

  return result;
};

const insert = async (product) => {
  const { name } = product;
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUE (?)',
    [name],
  );

  return insertId;
};

const update = async (productId, productName) => {
  const [result] = await connection.execute(
    'UPDATE products SET name = (?) WHERE id = (?)',
    [productName, productId],
  );

  return result;
};

const remove = async (productId) => {
  const [result] = await connection.execute(
    'DELETE FROM products WHERE id = (?)',
    [productId],
  );

  return result;
};

module.exports = {
  findAll,
  findById,
  insert,
  update,
  remove,
};
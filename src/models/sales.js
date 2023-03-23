const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    `SELECT sp.sale_id AS saleId, s.date, sp.product_id AS productId, sp.quantity
    FROM sales AS s
    INNER JOIN sales_products AS sp
    ON s.id = sp.sale_id
    ORDER BY sp.sale_id, sp.product_id`,
  );

  return (result);
};

const findById = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT s.date, sp.product_id AS productId, sp.quantity
    FROM sales AS s
    INNER JOIN sales_products AS sp
    ON s.id = sp.sale_id
    WHERE s.id = (?)
    ORDER BY sp.sale_id, sp.product_id`,
    [saleId],
  );

  return (result);
};

module.exports = {
  findAll,
  findById,
};
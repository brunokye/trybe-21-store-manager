const product = {
  name: 'Martelo de Thor',
};

const newProduct = { id: 1, ...product };

const productList = [newProduct];

module.exports = {
  newProduct,
  productList,
};
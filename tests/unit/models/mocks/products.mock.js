const products = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
];

const newProduct = {
  "name": "Bolsa que cabe a família"
};

const updatedProduct = {
  "id": 1,
  "name": "Teste"
};

const removedProduct = {
  "affectedRows": 1
};

module.exports = {
  products,
  newProduct,
  updatedProduct,
  removedProduct,
};
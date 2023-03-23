const sale = {
  "date": "2023-03-23T00:03:01.000Z",
  "saleId": 3,
  "quantity": 15
};

const newSale = { id: 1, ...sale };

const saleList = [newSale];

module.exports = {
  newSale,
  saleList,
};
const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { productsModel } = require('../../../src/models');
const { products, newProduct } = require('./mocks/products.mock');

describe('Testes de unidade do model products', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('findAll e findById', function () {
    it('Retorna todos os produtos', async function () {
      sinon.stub(connection, 'execute').resolves([products]);
      const result = await productsModel.findAll();
      expect(result).to.be.deep.equal(products);
    });

    it('Retorna um produto a partir do ID', async function () {
      sinon.stub(connection, 'execute').resolves([[products[0]]]);
      const result = await productsModel.findById(1);
      expect(result).to.be.deep.equal(products[0]);
    });
  });

  describe('createProduct', function () {
    it('Cadastra um novo produto', async function () {
      sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
      const result = await productsModel.insert(newProduct);
      expect(result).to.equal(1);
    });
  });
});
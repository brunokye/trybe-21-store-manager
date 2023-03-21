const { expect } = require('chai');
const sinon = require('sinon');

const { productsService } = require('../../../src/services');
const { productsModel } = require('../../../src/models');
const { products } = require('./mocks/products.mock');

describe('Testes de unidade do service products', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Retorna a lista completa de produtos', async function () {
    sinon.stub(productsModel, 'findAll').resolves(products);

    const result = await productsService.findAll();

    expect(result.type).to.be.equal(null);
    expect(result.message).to.deep.equal(products);
  });

  it('Retorna o produto caso ID existente', async function () {
    sinon.stub(productsModel, 'findById').resolves(products[0]);

    const result = await productsService.findById(1);

    expect(result.type).to.equal(null);
    expect(result.message).to.deep.equal(products[0]);
  });

  it('Retorna um erro caso receba um ID inválido', async function () {
    const result = await productsService.findById('a');

    expect(result.type).to.equal('INVALID_VALUE');
    expect(result.message).to.equal('"id" must be a number');
  });

  it('Retorna um erro caso o produto não exista', async function () {
    sinon.stub(productsModel, 'findById').resolves(undefined);

    const result = await productsService.findById(1);

    expect(result.type).to.equal('PRODUCT_NOT_FOUND');
    expect(result.message).to.equal('Product not found');
  });
});
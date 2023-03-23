const { expect } = require('chai');
const sinon = require('sinon');

const { salesService } = require('../../../src/services');
const { salesModel } = require('../../../src/models');
const { sales } = require('./mocks/sales.mock');

describe('Testes de unidade do service sales', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('findAll e findById', function () {
    it('Retorna a lista completa de sales', async function () {
      sinon.stub(salesModel, 'findAll').resolves(sales);

      const result = await salesService.findAll();

      expect(result.type).to.be.equal(null);
      expect(result.message).to.deep.equal(sales);
    });

    it('Retorna sales caso ID existente', async function () {
      sinon.stub(salesModel, 'findById').resolves(sales[0]);

      const result = await salesService.findById(1);

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(sales[0]);
    });

    it('Retorna um erro caso receba um ID inválido', async function () {
      const result = await salesService.findById('a');

      expect(result.type).to.equal('INVALID_VALUE');
      expect(result.message).to.equal('"id" must be a number');
    });

    it('Retorna um erro caso as sales não existam', async function () {
      sinon.stub(salesModel, 'findById').resolves('');

      const result = await salesService.findById(1);

      expect(result.type).to.equal('SALE_NOT_FOUND');
      expect(result.message).to.equal('Sale not found');
    });
  });
});
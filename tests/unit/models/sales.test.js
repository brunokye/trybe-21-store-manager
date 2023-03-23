const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models');
const { sales } = require('./mocks/sales.mock');

describe('Testes de unidade do model sales', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('findAll e findById', function () {
    it('Retorna todas as sales', async function () {
      sinon.stub(connection, 'execute').resolves([sales]);
      const result = await salesModel.findAll();
      expect(result).to.be.deep.equal(sales);
    });

    it('Retorna sales a partir do ID', async function () {
      sinon.stub(connection, 'execute').resolves([sales[0]]);
      const result = await salesModel.findById(1);
      expect(result).to.be.deep.equal(sales[0]);
    });
  });
});
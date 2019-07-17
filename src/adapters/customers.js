const ApiAdapter = require('./api');
const _ = require('lodash');
const { HttpError } = require('../utils/responses');

/**
 * An adapter for the Enswitch Customers API
 */
class Customers extends ApiAdapter {
  /**
   * Fetch account current balance
   * Optional params : id (account id)
   * @param data
   * @returns {Promise<nomadoResponse>}
   */
  async getBalance(data = {}) {
    const endpoint = 'account/balance';
    let response = await this._call(endpoint, data);

    return response;
  }

  async _call(endpoint, data) {
    return super._call(endpoint, data);
  }
};

module.exports = Customers;

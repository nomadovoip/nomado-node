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
    const endpoint = 'customers/get';
    let response = await this._call(endpoint, data);

    //Only return balance related data
    response.data = _.pick(response.data, ['balance']);

    return response;
  }

  async _call(endpoint, data) {
    if (!data.id) {
      try {
        //If the user id is not supplied, we ask the auth manager to fetch it for us
        let user = await this.authManager.login();
        data.id = user.customer;
      } catch (error) {
        return HttpError.buildResponse(error);
      }
    }

    return super._call(endpoint, data);
  }
};

module.exports = Customers;

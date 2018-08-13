const ApiAdapter = require('./apiAdapter');
const Validator = require('../utils/validator');
const auth = require('../core/authManager');
const _ = require('lodash');
/**
 * An adapter for the Enswitch Customers API
 */
class CustomersAdapter extends ApiAdapter {
  /**
   * Fetch account current balance
   * Optional params : id (account id)
   * @param data
   * @returns {Promise<NomadoResponse>}
   */
  async getBalance (data = {}) {
    const endpoint = 'customers/get';
    let response = await this._call(endpoint, data);

    //Only return balance related data
    response.data = _.pick(response.data, ['balance']);

    return response;
  }

  async _call(endpoint, data) {
    if (!data.id) {
      //If the user id is not supplied, we ask the auth manager to fetch it for us
      let user = await this.authManager.login();

      data.id = user.customer;
    }

    return super._call(endpoint, data);
  }
};

module.exports = CustomersAdapter;

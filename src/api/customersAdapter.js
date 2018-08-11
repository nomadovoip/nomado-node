const ApiAdapter = require('./apiAdapter');
const Validator = require('../utils/validator');
const auth = require('../service/auth');
const UserAdapter = require('./userAdapter');
const _ = require('lodash');
/**
 * An adapter for the Enswitch Customers API
 */
class CustomersAdapter extends ApiAdapter {
  constructor(httpClient) {
    super(httpClient);
    this.userAdapter = new UserAdapter(this.httpClient);
  }
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
      let user = await auth.login(this.userAdapter);
      if (!user.customer) {
        //Throw an error if the response does not contain the user id
        Validator.throwInvalidAPIResponse(['customer'], endpoint);
      }

      data.id = user.customer;
    }

    return super._call(endpoint, data);
  }
};

module.exports = CustomersAdapter;

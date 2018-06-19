const EnswitchAdapter = require('./enswitchAdapter');
const Validator = require('../utils/validator');
const auth = require('../service/auth');
const UserAdapter = require('./userAdapter');
/**
 * An adapter for the Enswitch Customers API
 */
class CustomersAdapter extends EnswitchAdapter {
  constructor() {
    super();
    this.userAdapter = new UserAdapter();
  }
  /**
   * Fetch account current balance
   * Optional params : id (account id)
   * @param data
   * @returns {Promise<NomadoResponse>}
   */
  async getBalance (data = {}) {
    const endpoint = 'customers/get';
    let nomadoResponse = await this._call(endpoint, data);
    return nomadoResponse.data.balance;
  }

  async _call(endpoint, data) {
    if (!data.id) {
      let user = await auth.login(this.userAdapter);
      if (!user.customer) {
        Validator.throwInvalidAPIResponse(['customer'], endpoint);
      }

      data.id = user.customer;
    }

    return super._call(endpoint, data);
  }
};

module.exports = CustomersAdapter;

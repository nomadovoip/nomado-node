const _ = require('lodash');
const axiosInstance = require('axios');

class HttpClient {
  constructor(config = {}) {
    this.SERVER_URL = this.prepareServerURL(config);
    this.HTTP_METHOD = config.HTTP_METHOD;
    this.axios = axiosInstance.create({
      baseURL: this.SERVER_URL,
    });
  }

  /**
   *  CALL THE API
  */
  async _CALL(endpoint = '', data = {}) {
    try {
      let result = await axios({
        method: this.HTTP_METHOD,
        url: endpoint,
        data: data,
      });

      return result.data;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = HttpClient;

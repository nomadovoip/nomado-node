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
}

module.exports = HttpClient;

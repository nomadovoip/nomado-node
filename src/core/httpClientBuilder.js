const Enswitch = require('../http/enswitch');
const Nomado = require('../http/nomado');
const Config = require('../config/config');
const auth = require('./authManager');


/**
 * Builds http clients with server config and credentials
 */
class HttpClientBuilder {
  constructor(credentials) {
    this._credentials = credentials;
  }

  get nomado() {
    this._nomadoClient = this._nomadoClient || new Nomado({ ...Config.api.nomado, ...this._credentials });
    return this._nomadoClient;
  }

  get enswitch() {
    this._enswitchClient = this._enswitchClient || new Enswitch({ ...Config.api.enswitch, ...this._credentials });
    return this._enswitchClient;
  }
};

module.exports = HttpClientBuilder;

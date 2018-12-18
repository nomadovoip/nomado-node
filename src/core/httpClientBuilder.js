const Enswitch = require('../http/enswitch');
const Nomado = require('../http/nomado');
const Config = require('../config/config');

/**
 * Builds http clients with server config and credentials
 */
class HttpClientBuilder {
  constructor(credentials) {
    this._credentials = credentials;
  }

  get nomado() {
    const config = { ...Config.api.nomado, ...this._credentials };
    this._nomadoClient = this._nomadoClient || new Nomado(config);
    return this._nomadoClient;
  }

  get enswitch() {
    const config = { ...Config.api.enswitch, ...this._credentials };
    this._enswitchClient = this._enswitchClient || new Enswitch(config);
    return this._enswitchClient;
  }
};

module.exports = HttpClientBuilder;

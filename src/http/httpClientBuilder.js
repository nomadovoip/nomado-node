const Enswitch = require('../http/enswitch');
const Nomado = require('../http/nomado');
const Config = require('../config/config');
const auth = require('../service/auth');

let nomadoClient;
let enswitchClient;

const HttpClientBuilder = {
  get nomado() {
    nomadoClient = nomadoClient || new Nomado({ ...Config.api.nomado, ...auth.credentials });
    return nomadoClient;
  },

  get enswitch() {
    enswitchClient = enswitchClient || new Enswitch({ ...Config.api.enswitch, ...auth.credentials });
    return enswitchClient;
  },
};

module.exports = HttpClientBuilder;

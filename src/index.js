const Calls = require('./core/calls');
const authManager = require('./service/auth');
const CallsApiAdapter = require('./api/callsApiAdapter');

const nomadoClient = function (username, password) {
  authManager.setCredentials(username, password);

  const callsApiAdapter = new CallsApiAdapter();

  return {
    calls: new Calls(callsApiAdapter),
  };
};

module.exports = nomadoClient;

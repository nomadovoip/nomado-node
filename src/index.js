const Calls = require('./core/calls');
const auth = require('./service/auth');
const EnswitchCallsAdapter = require('./api/EnswitchCallsAdapter');

const nomadoClient = function (username, password) {
  auth.setCredentials(username, password);

  const callsAdapter = new EnswitchCallsAdapter();

  return {
    calls: new Calls(callsAdapter),
  };
};

module.exports = nomadoClient;

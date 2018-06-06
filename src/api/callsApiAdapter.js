const authManager = require('../service/auth');
const Enswitch = require('../http/enswitch');

const httpConfig = {
  SERVER: 'npbx.nomado.eu',
  TRANSPORT: 'https',
};

class callsApiAdapter {
  constructor() {
    this.httpService = new Enswitch({ ...httpConfig, ...authManager.credentials });
  }

  make (data = {}) {
    //TODO check required params
    return this.httpService._CALL('calls/make', data);
  }
};

module.exports = callsApiAdapter;

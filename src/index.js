const InterfaceBuilder = require('./core/interfaceBuilder');
/**
 * The nomado SDK client which exposes public interfaces
 */
class nomadoClient {
  constructor(authConfig = {}) {
    const publicInterface = new InterfaceBuilder(authConfig);
    this.calls = publicInterface.calls;
    this.account = publicInterface.account;
    this.hlr = publicInterface.hlr;
    this.sms = publicInterface.sms;
    this.otp = publicInterface.otp;
  }
};

module.exports = nomadoClient;

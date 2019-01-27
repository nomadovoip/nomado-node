/* eslint-env jasmine */

const nomadoClient = require('../');
const Sms = require('../src/public/sms');
const nomadoResponse = require('../src/utils/responses').nomadoResponse;
const smsResponse = require('./data/nomadoSuccess.json');

describe('Sms Interface', () => {
  it('should create an instance of SMS', () => {
    const nomado = new nomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
    expect(nomado.sms instanceof Sms).toBe(true);
  });

  it('should return a nomadoResponse', async () => {
    const nomado = new nomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
    const sms = nomado.sms;
    spyOn(sms.api.httpClient, '_CALL').and.returnValue(smsResponse);
    const smsConfig = {
      to: '0123456789',
      message: 'test',
      unicode: false,
    };

    let response = await sms.send(smsConfig);

    expect(response instanceof nomadoResponse).toBe(true);
  });
});

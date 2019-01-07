/* eslint-env jasmine */

const NomadoClient = require('../');
const Sms = require('../src/public/sms');
const NomadoResponse = require('../src/utils/responses').NomadoResponse;
const smsResponse = require('./data/genericSuccess.json');

describe('Sms Interface', () => {
  it('should create an instance of SMS', () => {
    const nomado = new NomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
    expect(nomado.sms instanceof Sms).toBe(true);
  });

  it('should return a NomadoResponse', async () => {
    const nomado = new NomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
    const sms = nomado.sms;
    spyOn(sms.api.httpClient, '_CALL').and.returnValue(smsResponse);
    const smsConfig = {
      to: '0123456789',
      from: '1234567890',
      message: 'test',
      unicode: false,
    };

    let response = await sms.send(smsConfig);

    expect(response instanceof NomadoResponse).toBe(true);
  });
});

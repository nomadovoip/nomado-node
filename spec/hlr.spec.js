/* eslint-env jasmine */

const NomadoClient = require('../');
const Hlr = require('../src/public/hlr');
const NomadoResponse = require('../src/utils/responses').NomadoResponse;
const smsResponse = require('./data/smsSuccess.json');

describe('HLR Interface', () => {
  it('should create an instance of HLR', () => {
    const nomado = new NomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
    expect(nomado.hlr instanceof Hlr).toBe(true);
  });

  it('should return a NomadoResponse', async () => {
    const nomado = new NomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
    const hlr = nomado.hlr;
    spyOn(hlr.api.httpClient, '_CALL').and.returnValue(smsResponse);
    const hlrConfig = {
      number: '0123456789',
    };

    let response = await hlr.get(hlrConfig);

    expect(response instanceof NomadoResponse).toBe(true);
  });
});

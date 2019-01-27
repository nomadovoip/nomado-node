/* eslint-env jasmine */

const nomadoClient = require('../');
const Hlr = require('../src/public/hlr');
const nomadoResponse = require('../src/utils/responses').nomadoResponse;
const genericResponse = require('./data/nomadoSuccess.json');

describe('HLR Interface', () => {
  it('should create an instance of HLR', () => {
    const nomado = new nomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
    expect(nomado.hlr instanceof Hlr).toBe(true);
  });

  it('should call validate and return a nomadoResponse', async () => {
    const nomado = new nomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
    const hlr = nomado.hlr;
    spyOn(hlr.api.httpClient, '_CALL').and.returnValue(genericResponse);
    const hlrConfig = {
      number: '0123456789',
    };

    let response = await hlr.validate(hlrConfig);

    expect(response instanceof nomadoResponse).toBe(true);
  });

  it('should call fetch and return a nomadoResponse', async () => {
    const nomado = new nomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
    const hlr = nomado.hlr;
    spyOn(hlr.api.httpClient, '_CALL').and.returnValue(genericResponse);
    const hlrConfig = {
      numbers: ['0123456789'],
    };

    let response = await hlr.fetch(hlrConfig);

    expect(response instanceof nomadoResponse).toBe(true);
  });
});

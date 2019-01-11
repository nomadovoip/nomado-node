/* eslint-env jasmine */

const NomadoClient = require('../');
const Hlr = require('../src/public/hlr');
const NomadoResponse = require('../src/utils/responses').NomadoResponse;
const genericResponse = require('./data/nomadoSuccess.json');

describe('HLR Interface', () => {
  it('should create an instance of HLR', () => {
    const nomado = new NomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
    expect(nomado.hlr instanceof Hlr).toBe(true);
  });

  it('should call validate and return a NomadoResponse', async () => {
    const nomado = new NomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
    const hlr = nomado.hlr;
    spyOn(hlr.api.httpClient, '_CALL').and.returnValue(genericResponse);
    const hlrConfig = {
      number: '0123456789',
    };

    let response = await hlr.validate(hlrConfig);

    expect(response instanceof NomadoResponse).toBe(true);
  });

  it('should call fetch and return a NomadoResponse', async () => {
    const nomado = new NomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
    const hlr = nomado.hlr;
    spyOn(hlr.api.httpClient, '_CALL').and.returnValue(genericResponse);
    const hlrConfig = {
      numbers: ['0123456789'],
    };

    let response = await hlr.fetch(hlrConfig);

    expect(response instanceof NomadoResponse).toBe(true);
  });
});

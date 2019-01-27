/* eslint-env jasmine */

const nomado = require('../src/http/nomado');

describe('nomadoClient', () => {
  it('should generate an API path', () => {
    var path = new nomado().prepareServerURL({ TRANSPORT: 'https', SERVER: 'nomado.com' });
    expect(path).toBe('https://nomado.com');
  });

  it('should generate a valid BEARER auth header', () => {
    const nomadoHttp = new nomado();
    nomadoHttp.prepareAuthHeader({ AUTH_TYPE: 'TOKEN', TOKEN: '12345' });
    expect(nomadoHttp.AUTH_HEADER).toBe('BEARER 12345');
  });

  it('should generate a valid BASIC auth header', () => {
    const nomadoHttp = new nomado();
    nomadoHttp.prepareAuthHeader({
      AUTH_TYPE: 'BASIC',
      B64: 'username:pass',
    });
    expect(nomadoHttp.AUTH_HEADER).toBe('BASIC username:pass');
  });
});

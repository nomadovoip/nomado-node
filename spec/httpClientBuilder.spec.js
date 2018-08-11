/* eslint-env jasmine */

const HttpClientBuilder = require('../src/http/httpClientBuilder');
const Nomado = require('../src/http/nomado');
const Enswitch = require('../src/http/enswitch');

describe('HttpClientBuilder', () => {
  it('should generate build a Nomado object', () => {
    var nomadoClient = HttpClientBuilder.nomado;
    expect(nomadoClient).toEqual(jasmine.any(Nomado));
  });

  it('should generate build a Enswitch object', () => {
    var enswitchClient = HttpClientBuilder.enswitch;
    expect(enswitchClient).toEqual(jasmine.any(Enswitch));
  });

  it('should return the same Nomado object', () => {
    var nomado1 = HttpClientBuilder.nomado;
    var nomado2 = HttpClientBuilder.nomado;
    expect(nomado1).toBe(nomado2);
  });

  it('should return the same Enswitch object', () => {
    var enswitch1 = HttpClientBuilder.enswitch;
    var enswitch2 = HttpClientBuilder.enswitch;
    expect(enswitch1).toBe(enswitch2);
  });
});

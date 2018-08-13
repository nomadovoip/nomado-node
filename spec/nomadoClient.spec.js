/* eslint-env jasmine */

const NomadoClientSpec = require('../index');
const Calls = require('../src/public/calls');
const Account = require('../src/public/account');

describe('NomadoClient', () => {

  it('should return a Calls object', () => {
    let credentials1 = { USERNAME: 'user1', PASSWORD: 'pass2' };
    const nomadoClient = new NomadoClientSpec(credentials1);
    expect(nomadoClient.calls).toEqual(jasmine.any(Calls));
  });

  it('should return build a Account object', () => {
    let credentials1 = { USERNAME: 'user1', PASSWORD: 'pass2' };
    const nomadoClient = new NomadoClientSpec(credentials1);
    expect(nomadoClient.account).toEqual(jasmine.any(Account));
  });

  it('should call the API with different credentials', () => {
    let credentials1 = { USERNAME: 'user1', PASSWORD: 'pass1' };
    let credentials2 = { USERNAME: 'user2', PASSWORD: 'pass2' };
    const nomadoClient1 = new NomadoClientSpec(credentials1);
    const nomadoClient2 = new NomadoClientSpec(credentials2);

    expect(nomadoClient1.calls.api.httpClient.USERNAME).toBe(credentials1.API_USER);
    expect(nomadoClient2.calls.api.httpClient.USERNAME).toBe(credentials2.API_USER);
  });

});

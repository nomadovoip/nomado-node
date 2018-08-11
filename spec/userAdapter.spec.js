/* eslint-env jasmine */

const UserAdapter = require('../src/api/userAdapter');
const userResponse = require('./data/userSuccess.json');
const NomadoResponse = require('../src/utils/responses').NomadoResponse;
const HttpClientBuilder = require('../src/http/httpClientBuilder');

describe('UserAdapter', () => {
  it('should return a successful NomadoResponse with code 200', async () => {
    const adapter = new UserAdapter(HttpClientBuilder.enswitch);
    spyOn(adapter.httpClient, '_CALL').and.returnValue(userResponse);

    let response = await adapter.login();
    expect(response instanceof NomadoResponse).toBe(true);
    expect(response.code).toBe('200');
  });
});

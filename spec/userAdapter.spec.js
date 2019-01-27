/* eslint-env jasmine */

const UserAdapter = require('../src/adapters/user');
const userResponse = require('./data/userSuccess.json');
const nomadoResponse = require('../src/utils/responses').nomadoResponse;
const HttpClientBuilder = require('../src/core/httpClientBuilder');

describe('UserAdapter', () => {
  it('should return a successful nomadoResponse with code 200', async () => {
    let httpClientBuilder = new HttpClientBuilder({ USERNAME: 'user', PASSWORD: 'pass' });
    const adapter = new UserAdapter(httpClientBuilder.enswitch);
    spyOn(adapter.httpClient, '_CALL').and.returnValue(userResponse);

    let response = await adapter.login();
    expect(response instanceof nomadoResponse).toBe(true);
    expect(response.code).toBe('200');
  });
});

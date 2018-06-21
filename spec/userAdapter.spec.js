/* eslint-env jasmine */

const UserAdapter = require('../src/api/userAdapter');
const userResponse = require('./data/userSuccess.json');
const NomadoResponse = require('../src/core/responses').NomadoResponse;

describe('UserAdapter', () => {
  it('should return a successful NomadoResponse with code 200', async () => {
    const adapter = new UserAdapter();
    spyOn(adapter.httpService, '_CALL').and.returnValue(userResponse);

    let response = await adapter.login();
    expect(response instanceof NomadoResponse).toBe(true);
    expect(response.code).toBe('200');
  });
});

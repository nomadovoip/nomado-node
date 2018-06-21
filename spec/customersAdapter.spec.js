/* eslint-env jasmine */

const CustomersAdapter = require('../src/api/customersAdapter');
const customerResponse = require('./data/customerSuccess.json');
const userResponse = require('./data/userSuccess.json');
const NomadoResponse = require('../src/core/responses').NomadoResponse;

describe('CustomersAdapter', () => {
  it('should return a successful NomadoResponse with code 200', async () => {
    const adapter = new CustomersAdapter();
    spyOn(adapter.userAdapter.httpService, '_CALL').and.returnValue(userResponse);
    spyOn(adapter.httpService, '_CALL').and.returnValue(customerResponse);

    let response = await adapter.getBalance();
    expect(response instanceof NomadoResponse).toBe(true);
    expect(response.code).toBe('200');
  });
});

/* eslint-env jasmine */

const CustomersAdapter = require('../src/api/customersAdapter');
const customerResponse = require('./data/customerSuccess.json');
const userResponse = require('./data/userSuccess.json');
const NomadoResponse = require('../src/utils/responses').NomadoResponse;
const HttpClientBuilder = require('../src/http/httpClientBuilder');

describe('CustomersAdapter', () => {
  it('should return a successful NomadoResponse with code 200', async () => {
    const adapter = new CustomersAdapter(HttpClientBuilder.enswitch);
    spyOn(adapter.userAdapter.httpClient, '_CALL').and.returnValue(userResponse);
    // spyOn(adapter.httpClient, '_CALL').and.returnValue(customerResponse);

    let response = await adapter.getBalance();
    expect(response instanceof NomadoResponse).toBe(true);
    expect(response.code).toBe('200');
  });
});

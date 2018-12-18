/* eslint-env jasmine */

const AuthManager = require('../src/core/authManager');
const authUtils = require('../src/utils/credentials');
const UserAdapter = require('../src/adapters/user');
const userResponse = require('./data/userSuccess.json');
const HttpClientBuilder = require('../src/core/httpClientBuilder');

describe('AuthManager', () => {
  beforeAll(() => {
    let credentials = { USERNAME: 'user', PASSWORD: 'pass' };
    this.httpClientBuilder = new HttpClientBuilder(credentials);

    const userAdapter = new UserAdapter(this.httpClientBuilder.enswitch);
    this.authManager = new AuthManager(userAdapter, credentials);
  });

  beforeEach(() => {
    //Reset auth stored user data if any
    this.authManager._user = null;
  });

  it('should return user data with customer id', async () => {
    const userAdapter = new UserAdapter(this.httpClientBuilder.enswitch);
    spyOn(userAdapter.httpClient, '_CALL').and.returnValue(userResponse);
    const user = await this.authManager.login(userAdapter);
    expect(user.customer).toEqual(jasmine.any(String));
  });

  it('should throw an error if customer id is missing', (done) => {
    const userAdapter = new UserAdapter(this.httpClientBuilder.enswitch);
    spyOn(userAdapter.httpClient, '_CALL').and.returnValue({});

    this.authManager.login(userAdapter)
      .catch((error) => {
        done();
      });
  });

  it('should throw an error if using an unknown authentication method', () => {
    expect(() => {
      const myCredentials = { USERNMAE: 'user', PASSWORD: 'pass', AUTH_TYPE: 'UNKNOWN' };
      authUtils.parse(myCredentials);
    }).toThrow();
  });
});

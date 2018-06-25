/* eslint-env jasmine */

const auth = require('../src/service/auth');
const UserAdapter = require('../src/api/userAdapter');
const userResponse = require('./data/userSuccess.json');

describe('AuthManager', () => {
  beforeEach(() => {
    //Reset auth stored user data if any
    auth._user = null;
  });

  it('should store the credentials', () => {
    const myCredentials = { USERNAME: 'user', PASSWORD: 'pass' };
    auth.setCredentials(myCredentials);
    expect(auth.credentials.USERNAME).toBe(myCredentials.USERNAME);
    expect(auth.credentials.PASSWORD).toBe(myCredentials.PASSWORD);
  });

  it('should return user data with customer id', async () => {
    const userAdapter = new UserAdapter();
    spyOn(userAdapter.httpService, '_CALL').and.returnValue(userResponse);
    const user = await auth.login(userAdapter);
    expect(user.customer).toEqual(jasmine.any(String));
  });

  it('should throw an error if customer id is missing', (done) => {
    const userAdapter = new UserAdapter();
    spyOn(userAdapter.httpService, '_CALL').and.returnValue({});

    auth.login(userAdapter)
      .catch((error) => {
        done();
      });
  });

  it('should throw an error if using an unknown authentication method', () => {
    expect(() => {
      const myCredentials = { USERNMAE: 'user', PASSWORD: 'pass', AUTH_TYPE: 'UNKNOWN' };
      auth.setCredentials(myCredentials);
    }).toThrow();
  });
});

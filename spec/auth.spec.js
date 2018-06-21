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
    const myCredentials = { username: 'user', password: 'pass' };
    auth.setCredentials(myCredentials);
    expect(auth.credentials.USERNAME).toBe(myCredentials.username);
    expect(auth.credentials.PASSWORD).toBe(myCredentials.password);
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
      const myCredentials = { username: 'user', password: 'pass', authType: 'UNKNOWN' };
      auth.setCredentials(myCredentials);
    }).toThrow();
  });
});

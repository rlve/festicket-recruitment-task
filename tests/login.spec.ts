import { expect } from 'chai';
import LoginPage from 'pages/login.page';

const VALID_CREDENTIALS = {
  EMAIL: 'dummymail@mail.com',
  PASSWORD: 'festicketTest',
  USER_LETTER: 'D'
};

describe('Login scenario', () => {
  it('should log in with valid credentials', () => {
    const { EMAIL, PASSWORD, USER_LETTER } = VALID_CREDENTIALS;

    LoginPage.open();
    LoginPage.logIn(EMAIL, PASSWORD);
    LoginPage.waitForLoginModal(true);

    expect(LoginPage.isLoggedIn(USER_LETTER)).to.equal(
      true,
      'User is not logged in.'
    );
  });

  it('should log out', () => {
    const { USER_LETTER } = VALID_CREDENTIALS;

    LoginPage.logOut(USER_LETTER);
    LoginPage.waitForLoggedUserMenu(true);

    expect(LoginPage.isLoggedIn()).to.equal(false, 'User is still logged in.');
  });
});

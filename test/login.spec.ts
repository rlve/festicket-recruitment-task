import { expect } from 'chai';
import HomePage from 'src/pages/HomePage';

const VALID_CREDENTIALS = {
  email: 'radoslaw1kaminski@gmail.com',
  password: 'festicketTest',
  userLetter: 'R'
};

describe('Login', () => {
  it('should log in with valid credentials', () => {
    const { email, password, userLetter } = VALID_CREDENTIALS;

    HomePage.open();
    HomePage.logIn(email, password);
    HomePage.waitForLoginModal(true);

    expect(HomePage.isLoggedIn(userLetter)).to.equal(
      true,
      'User is not logged in.'
    );
  });

  it('should log out', () => {
    const { userLetter } = VALID_CREDENTIALS;

    HomePage.logOut(userLetter);
    HomePage.waitForLoggedUserMenu(true);

    expect(HomePage.isLoggedIn()).to.equal(false, 'User is still logged in.');
  });
});

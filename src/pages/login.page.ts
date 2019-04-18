import BasePage from 'src/pages/page';

class LoginPage extends BasePage {
  get logInButton() {
    return $('span=Log In');
  }

  get logInModalHeader() {
    return $('h2=Log In');
  }

  get emailInput() {
    return $('#emailInput');
  }

  get passwordInput() {
    return $('#passwordInput');
  }

  get submitButton() {
    return $('#submitButton');
  }

  getLoggedUserButton(userLetter: string): WebdriverIO.Element {
    return $(`span=${userLetter}`);
  }

  get logOutButton() {
    return $('a=Log Out');
  }

  open() {
    browser.url('');
  }

  waitForLoginModal(reverse: boolean = false) {
    this.logInModalHeader.waitForDisplayed(10000, reverse);
  }

  logIn(email: string, password: string) {
    this.logInButton.waitForDisplayed();
    this.logInButton.click();
    this.waitForLoginModal();
    this.emailInput.setValue(email);
    this.passwordInput.setValue(password);
    this.submitButton.click();
  }

  isLoggedIn(userLetter?: string): boolean {
    const logInButtonCheck = !this.logInButton.isDisplayed();
    const loggedUserButtonCheck = userLetter
      ? this.getLoggedUserButton(userLetter).isDisplayed()
      : false;

    return logInButtonCheck && loggedUserButtonCheck;
  }

  waitForLoggedUserMenu(reverse: boolean = false) {
    this.logOutButton.waitForDisplayed(10000, reverse);
  }

  logOut(userLetter: string) {
    this.getLoggedUserButton(userLetter).click();
    this.waitForLoggedUserMenu();
    this.logOutButton.click();
  }
}

export default new LoginPage();

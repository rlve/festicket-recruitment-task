import BasePage from 'src/pages/BasePage';

class HomePage extends BasePage {
  open() {
    browser.url('');
  }
}

export default new HomePage();

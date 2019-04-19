import BasePage from 'pages/page';

class BasketPage extends BasePage {
  get basketHeader() {
    return $('h2=Basket');
  }

  isBasketPageOpened(): boolean {
    return this.basketHeader.isDisplayed();
  }
}

export default new BasketPage();

import BasePage from 'pages/page';

class BasketPage extends BasePage {
  get basketHeader() {
    return $('h2=Basket');
  }

  get availableCoaches() {
    return $$('h2#coach ~ a');
  }

  get couchDateAddOne() {
    return $('button[data-cy=quantity-add-button]');
  }

  get addToBasketButton() {
    return $('button[data-cy=product-add-to-basket]');
  }

  isBasketPageOpened(): boolean {
    return this.basketHeader.isDisplayed();
  }

  getCoachNameFrom(coach: WebdriverIO.Element): string {
    return coach.$('h3').getText();
  }

  addCoach(coach: WebdriverIO.Element) {
    coach.click();
    this.couchDateAddOne.waitForDisplayed();
    this.couchDateAddOne.scrollIntoView();
    this.couchDateAddOne.click();
    if (this.addToBasketButton.isEnabled()) {
      this.addToBasketButton.click();
    } else {
      throw new Error('Item cannot be added to basket.');
    }
  }

  isItemAdded(item: string): boolean {
    return $('div[data-cy=basket-body]').$(`span*=${item}`).isDisplayed();
  }
}

export default new BasketPage();

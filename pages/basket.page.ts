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

  get basket() {
    return $('div[data-cy=basket-body]');
  }

  getItemInBasket(item: string): WebdriverIO.Element {
    return this.basket.$(`span*=${item}`);
  }

  getElementFromItemsInBasket(index: number, selector: string) {
    const elements = this.basket.$$(selector);
    if(elements.length < index+1) {
      throw new Error('Not enough elements in basket.');
    }
    return elements[index];
  }

  isBasketPageOpened(): boolean {
    return this.basketHeader.isDisplayed();
  }

  getCoachByName(name: string): WebdriverIO.Element {
    const searchedCoach = this.availableCoaches.find((coach) => this.getCoachNameFrom(coach) === name);
    if (!searchedCoach) {
      throw new Error('Coach not found.');
    }

    return searchedCoach;
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
    return this.getItemInBasket(item).isDisplayed();
  }

  increaseQuantity(index: number) {
    const increaseButton = this.getElementFromItemsInBasket(index, 'span button:nth-child(3)');
    increaseButton.click();
  }

  checkQuantity(index: number): number {
    const quantity = this.getElementFromItemsInBasket(index, 'span > span');

    return parseInt(quantity.getText(), 10);
  }
}

export default new BasketPage();

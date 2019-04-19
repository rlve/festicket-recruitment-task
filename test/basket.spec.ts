import { expect } from 'chai';
import BasketPage from 'pages/basket.page';
import FestivalPage from 'pages/festival.page';

const FESTIVAL_URL = 'https://www.festicket.com/festivals/tomorrowland/2019/';

describe('Basket', () => {
  it('should open first available festival', () => {
    browser.url(FESTIVAL_URL);

    expect(FestivalPage.isFestivalPageOpened()).to.equal(true, 'Festival Page is not opened.');
  });

  it('should open basket page after click on book button', () => {
    FestivalPage.bookFestival();

    expect(BasketPage.isBasketPageOpened()).to.equal(true, 'Festival Page is not opened.');
  });

  it('', () => {
    browser.pause(3000);
  });
});

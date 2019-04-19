import { expect } from 'chai';
import BasketPage from 'pages/basket.page';
import FestivalPage from 'pages/festival.page';

const FESTIVAL_URL = 'https://www.festicket.com/festivals/glastonbury-festival/2019/';
const COACHES = {
  FROM_FESTIVAL: 'Glastonbury to London Coach Travel',
  TO_FESTIVAL: 'London to Glastonbury Coach Travel'
};

describe('Basket', () => {
  it('should open first available festival', () => {
    browser.url(FESTIVAL_URL);

    expect(FestivalPage.isFestivalPageOpened()).to.equal(true, 'Festival Page is not opened.');
  });

  it('should open basket page after click on book button', () => {
    FestivalPage.bookFestival();

    expect(BasketPage.isBasketPageOpened()).to.equal(true, 'Festival Page is not opened.');
  });

  Object.keys(COACHES).forEach((key) => {
    it(`should add coach: ${COACHES[key]}`, () => {
      const coachTo = BasketPage.availableCoaches.find((coach) =>
        BasketPage.getCoachNameFrom(coach) === COACHES[key]);
      if (!coachTo) {
        throw new Error('Coach not found.');
      }
      BasketPage.addCoach(coachTo);

      expect(BasketPage.isItemAdded(COACHES[key])).to.equal(true, 'Couch is not added to basket.');
    });
  });

  it('', () => {
    browser.pause(3000);
  });
});

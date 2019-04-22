import { expect } from 'chai';
import BasketPage from 'pages/basket.page';
import FestivalPage from 'pages/festival.page';

const FESTIVAL = {
  COACHES: {
    FROM_FESTIVAL: 'Glastonbury to London Coach Travel',
    TO_FESTIVAL: 'London to Glastonbury Coach Travel'
  },
  NAME: 'Glastonbury Festival 2019',
  URL: 'https://www.festicket.com/festivals/glastonbury-festival/2019/'
};

describe('Basket scenario', () => {
  const { COACHES, NAME, URL } = FESTIVAL;

  it(`should open the page of ${NAME}`, () => {
    browser.url(URL);

    expect(FestivalPage.isFestivalPageOpened()).to.equal(
      true,
      'Festival Page is not opened.'
    );
  });

  it('should open Basket after click on the book button', () => {
    FestivalPage.bookFestival();

    expect(BasketPage.isBasketPageOpened()).to.equal(
      true,
      'Basket is not opened.'
    );
  });

  Object.keys(COACHES).forEach((key) => {
    const coachName = COACHES[key];

    it(`should add the coach: ${coachName}`, () => {
      const coach = BasketPage.getCoachByName(coachName);
      BasketPage.addCoach(coach);

      expect(BasketPage.isItemAdded(coachName)).to.equal(
        true,
        'Couch is not added to the basket.'
      );
    });
  });

  it('should increase quantity of the first item in the basket', () => {
    const index = 0;
    const quantity = BasketPage.checkQuantity(index);
    BasketPage.increaseQuantity(index);
    const newQuantity = BasketPage.checkQuantity(index);

    expect(newQuantity).to.be.above(quantity, 'Quantity is not increased.');
  });
});

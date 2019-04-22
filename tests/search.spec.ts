import { expect } from 'chai';
import FestivalPage from 'pages/festival.page';
import SearchPage from 'pages/search.page';

const FESTIVAL = 'Orange Warsaw Festival 2019';

describe('Search scenario', () => {
  it('should open Search Page', () => {
    SearchPage.open();

    expect(SearchPage.isSearchOpened()).to.equal(
      true,
      'Search Page is not opened.'
    );
  });

  it('should display results when a search input is filled', () => {
    SearchPage.searchFor(FESTIVAL);

    expect(SearchPage.searchResults).to.have.length.above(
      0,
      'Results are empty'
    );
  });

  it('should open Festival Page after click on the result', () => {
    SearchPage.selectResultWithTitle(FESTIVAL);

    expect(FestivalPage.isFestivalPageOpened()).to.equal(
      true,
      'Festival Page is not opened.'
    );
  });

  it('Festival page should have header with festival name', () => {
    expect(FestivalPage.getFestivalName()).to.equal(
      FESTIVAL,
      'Not expected result page opened.'
    );
  });

  it('url of Festival Page should contain festival name', () => {
    const festivalWords = FESTIVAL.toLowerCase().split(' ');

    festivalWords.forEach((word) => {
      expect(browser.getUrl()).to.include(
        word,
        `Page url does not contain: ${word}.`
      );
    });
  });
});

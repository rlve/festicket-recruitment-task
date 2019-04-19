import BasePage from 'pages/page';

class FestivalPage extends BasePage {
  get festivalHeader() {
    return $('h1');
  }

  get bookFestivalButton() {
    return $('span=Book Your Festival');
  }

  get waitingListButton() {
    return $('span=Join Waiting List');
  }

  isFestivalPageOpened(): boolean {
    return this.bookFestivalButton.isDisplayed() || this.waitingListButton.isDisplayed();
  }

  getFestivalName(): string {
    return this.festivalHeader.getText();
  }

  bookFestival() {
    this.bookFestivalButton.click();
  }
}

export default new FestivalPage();

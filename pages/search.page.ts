import BasePage from 'pages/page';

class SearchPage extends BasePage {
  get searchInputOnHomePage() {
    return $('a[href="/search/"] input[type=text]');
  }

  get searchInput() {
    return $('#search-input');
  }

  get searchResults() {
    return $$('ul.app-containers-Search-search__search_results li a');
  }

  get resultHeader() {
    return $('h1');
  }

  open() {
    super.open();
    this.searchInputOnHomePage.click();
    this.searchInput.waitForDisplayed();
  }

  isSearchOpened(): boolean {
    return this.searchInput.isDisplayed();
  }

  searchFor(text: string) {
    this.searchInput.click();
    this.searchInput.setValue(text);
    browser.pause(3000);
    this.searchResults[0].waitForDisplayed();
  }

  selectFirstResult() {
    this.searchResults[0].click();
    this.waitForResultPage();
  }

  selectResultWithTitle(title: string) {
    const foundResult = this.searchResults.find((result) => result.getAttribute('title') === title);
    if (!foundResult) {
      throw new Error(`Result with title: ${title} not found!`);
    }
    foundResult.click();
    this.waitForResultPage();
  }

  waitForResultPage() {
    this.searchInput.waitForDisplayed(10000, true);
    this.resultHeader.waitForDisplayed();
  }

  getResultHeader(): string {
    this.waitForResultPage();

    return this.resultHeader.getText();
  }
}

export default new SearchPage();

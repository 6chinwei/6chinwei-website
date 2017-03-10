import { Chinwei2017Page } from './app.po';

describe('chinwei2017 App', () => {
  let page: Chinwei2017Page;

  beforeEach(() => {
    page = new Chinwei2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

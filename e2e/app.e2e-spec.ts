import { TextReaderPage } from './app.po';

describe('text-reader App', () => {
  let page: TextReaderPage;

  beforeEach(() => {
    page = new TextReaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

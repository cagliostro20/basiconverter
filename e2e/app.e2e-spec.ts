import { BasiConverterPage } from './app.po';

describe('basi-converter App', () => {
  let page: BasiConverterPage;

  beforeEach(() => {
    page = new BasiConverterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

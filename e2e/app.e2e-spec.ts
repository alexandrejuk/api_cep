import { CepPage } from './app.po';

describe('cep App', function() {
  let page: CepPage;

  beforeEach(() => {
    page = new CepPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

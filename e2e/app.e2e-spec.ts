import { Boostrap4angPage } from './app.po';

describe('boostrap4ang App', () => {
  let page: Boostrap4angPage;

  beforeEach(() => {
    page = new Boostrap4angPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { RxjsPage } from './app.po';

describe('rxjs App', () => {
  let page: RxjsPage;

  beforeEach(() => {
    page = new RxjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

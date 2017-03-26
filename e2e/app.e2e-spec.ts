import { HeadsAppPage } from './app.po';

describe('heads-app App', () => {
  let page: HeadsAppPage;

  beforeEach(() => {
    page = new HeadsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

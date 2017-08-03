import { EasyWaitPage } from './app.po';

describe('easy-wait App', () => {
  let page: EasyWaitPage;

  beforeEach(() => {
    page = new EasyWaitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

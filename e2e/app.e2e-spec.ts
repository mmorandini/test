import { CodeTestAppPage } from './app.po';

describe('code-test-app App', () => {
  let page: CodeTestAppPage;

  beforeEach(() => {
    page = new CodeTestAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

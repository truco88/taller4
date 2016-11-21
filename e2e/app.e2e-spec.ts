import { EjercicioPage } from './app.po';

describe('ejercicio App', function() {
  let page: EjercicioPage;

  beforeEach(() => {
    page = new EjercicioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

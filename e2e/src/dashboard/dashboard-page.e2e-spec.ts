import { browser } from 'protractor';
import { DashBoard } from './dashboard-page.po';

describe ('DashBoard', () => {

    const dashBoard = new DashBoard();

    beforeEach (() => {
        dashBoard.navigateToDashBoard();
    });

    it('If I click a hero, should redirect to hero details page', () => {
        const listHeroes = dashBoard.getHeroes();
        listHeroes.get(0).click();
        expect(browser.driver.getCurrentUrl()).toContain('/detail');
    });

    it('Should clean the list of messages', () => {
        const clearButton = dashBoard.getBottonClear();
        clearButton.click();
        //expect (Object.create(null)).toEqual(clearButton);
    });

    it('Should have 4 heroes in the dashboard', () => {
        expect (dashBoard.getHeroes().count()).toEqual(4);
    })

    it('Should search heroes', () => {
        const inputSearch = dashBoard.getInputSearch();
        inputSearch.sendKeys("nar");
        browser.sleep(4000);
        expect (dashBoard.getResultSearch().getText()).toEqual("Narco");
    })

    it('If I click Heroes, should redirect to hero details list', () => {
        const listHeroes = dashBoard.getLinkHeroes();
        listHeroes.click();
        expect(browser.driver.getCurrentUrl()).toContain('/heroes');
        browser.sleep(4000);
        expect (dashBoard.getMessages().count()).toEqual(2);
    });





});
import { browser } from 'protractor';
import { HeroDetails } from './hero-details-page.po';

describe ('DashBoard', () => {

    const heroDetails = new HeroDetails();

    beforeEach (() => {
        heroDetails.navigateToDashBoard();
        heroDetails.navigateToGetDetails();
    });

    it('Check if Go Back works', () =>{
        //const bottonBack = heroDetails.getBottonGoBack();
        //bottonBack.click();
        //expect(browser.driver.getCurrentUrl()).toContain('/heroes');
    })

    it('Check if add a hero', () => {
        const inputName = heroDetails.getInputName();
        inputName.sendKeys("aaaa");
        const bottonSave = heroDetails.getBottonSave();
        bottonSave.click();
        browser.sleep(4000);
        expect(browser.driver.getCurrentUrl()).toContain('/dashboard');
    })





});
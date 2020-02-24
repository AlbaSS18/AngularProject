import { browser } from 'protractor';
import { HeroDetails } from './hero-details-page.po';

describe ('Hero details', () => {

    const heroDetails = new HeroDetails();

    beforeEach (() => {
        heroDetails.navigateToDashBoard();
        const firstHero = heroDetails.getFirstHero();
        firstHero.click();
    });

    it('Check if Go Back works', () =>{
        const bottonBack = heroDetails.getBottonGoBack();
        bottonBack.click();
        expect(browser.driver.getCurrentUrl()).toContain('/dashboard');
    })

    it('Check if change name of hero', () => {
        const inputName = heroDetails.getInputName();
        inputName.sendKeys("aaaa");
        const bottonSave = heroDetails.getBottonSave();
        bottonSave.click();
        browser.sleep(4000);
        expect(browser.driver.getCurrentUrl()).toContain('/dashboard');
        const nameHero = heroDetails.getNameHeroe();
        expect(nameHero.getText()).toEqual("Narcoaaaa");
    })





});
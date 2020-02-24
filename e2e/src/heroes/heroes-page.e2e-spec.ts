import { browser } from 'protractor';
import { HeroesList } from './heroes-page.po';

describe ('Hero list', () => {

    const heroes = new HeroesList();

    beforeEach (() => {
        heroes.navigateToListHeroes();
    });

    it('Check if link hero works', () =>{
        const firstHero = heroes.getFirstHero();
        firstHero.click();
        expect(browser.driver.getCurrentUrl()).toContain('/detail');
    })

    it('Check if delete hero works', () =>{
        expect (heroes. getListHeroes().count()).toEqual(10);
        const buttonDelete = heroes.getButtonDelete(); //Elimina el último héroe
        buttonDelete.click();
        browser.sleep(4000);
        expect (heroes.getListHeroes().count()).toEqual(9);
    })

    it('Check if add hero works', () =>{
        expect (heroes. getListHeroes().count()).toEqual(10);
        const inputName = heroes.getInputName();
        inputName.sendKeys("herotest");
        const buttonAdd = heroes.getButtonAdd();
        buttonAdd.click();
        browser.sleep(4000);
        expect (heroes. getListHeroes().count()).toEqual(11);
    })








});
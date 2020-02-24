import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';
import { Element } from '@angular/compiler';

export class HeroesList {

    navigateToListHeroes(): promise.Promise<any> {
        return browser.get('/heroes');
    }


    getFirstHero (): ElementFinder {
        return element(by.xpath('/html/body/app-root/app-heroes/ul/li[1]/a'));
    }

    getListHeroes():  ElementArrayFinder {
        return element.all(by.xpath("/html/body/app-root/app-heroes/ul/li"));
    }

    getInputName(): ElementFinder {
        return element(by.xpath('/html/body/app-root/app-heroes/div/label/input'));
    }

    getButtonAdd (): ElementFinder {
        return element(by.id('buttonAdd'));
    }

    getButtonDelete (): ElementFinder {
        return element(by.xpath('/html/body/app-root/app-heroes/ul/li[10]/button'));
    }


    
}
import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';
import { Element } from '@angular/compiler';

export class DashBoard {

    navigateToDashBoard(): promise.Promise<any> {
        return browser.get('/dashboard');
    }

    getBottonClear (): ElementFinder {
        return element(by.id('buttonClear'));
    }

    getHeroes(): ElementArrayFinder{
        return element.all(by.xpath("//div[@id='listHeroes']/a"));
    }

    getLinkHeroes(): ElementFinder{
        return element(by.xpath("/html/body/app-root/nav/a[2]"));
    }

    getMessages(): ElementArrayFinder{
        return element.all(by.xpath("/html/body/app-root/app-messages/div"));
    }

    navigateToHeroes(): promise.Promise<any> {
        return browser.get('/heroes');
    }
}
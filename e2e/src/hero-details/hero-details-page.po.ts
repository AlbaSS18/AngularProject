import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';
import { Element } from '@angular/compiler';

export class HeroDetails {

    navigateToDashBoard(): promise.Promise<any> {
        return browser.get('/dashboard');
    }

    navigateToGetDetails(): promise.Promise<any> {
        return browser.get('/detail/12');
    }

    getNameHeroe(): ElementFinder {
        return element(by.xpath('/html/body/app-root/app-dashboard/div/a[1]/div/h4'));
    }
    
    getBottonGoBack (): ElementFinder {
        return element(by.id('GoBack'));
    }

    getInputName (): ElementFinder {
        return element(by.id('inputName'));
    }

    getBottonSave (): ElementFinder {
        return element(by.id('save'));
    }

    getFirstHero (): ElementFinder {
        return element(by.xpath('/html/body/app-root/app-dashboard/div/a[1]'));
    }

    
}
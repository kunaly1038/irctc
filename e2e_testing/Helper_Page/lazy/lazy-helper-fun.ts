import { ElementFinder, browser } from "protractor";

export class LazyHelper{
    static loginUser(){
        browser.get('https://www.irctc.co.in/nget/train-search')
    }
    static click(locatorName : ElementFinder){
        return locatorName.click();
    }
    static sendKeys(locatorName : ElementFinder, strName : string){    
                LazyHelper.clearText(locatorName);
        return  locatorName.sendKeys(strName)
    }
    static clearText(locatorName : ElementFinder){
        return locatorName.clear();
    }
    static getText(locatorName : ElementFinder){
        return locatorName.getText()
    }
    static isElementDisplayed(locatorName : ElementFinder){
        return locatorName.isDisplayed()
    }
    static isElementPresnt(locatorName : ElementFinder){
        return locatorName.isPresent()
    }

}

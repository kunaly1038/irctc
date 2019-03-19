"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class LazyHelper {
    static loginUser() {
        protractor_1.browser.get('https://www.irctc.co.in/nget/train-search');
    }
    static click(locatorName) {
        return locatorName.click();
    }
    static sendKeys(locatorName, strName) {
        LazyHelper.clearText(locatorName);
        return locatorName.sendKeys(strName);
    }
    static clearText(locatorName) {
        return locatorName.clear();
    }
    static getText(locatorName) {
        return locatorName.getText();
    }
    static isElementDisplayed(locatorName) {
        return locatorName.isDisplayed();
    }
    static isElementPresnt(locatorName) {
        return locatorName.isPresent();
    }
}
exports.LazyHelper = LazyHelper;
//# sourceMappingURL=lazy-helper-fun.js.map
Default ESSimport { PageHelper } from "../Helper_Page/lazy/lazy-helper-fun";
import { PageLocator } from "../Helper_Page/login/login-helper-locate";
import { LoginHelper } from "../Helper_Page/login/login-helper";
import { browser } from "protractor";

describe('angularjs homepage todo list', function () {

    beforeAll(async () => {
        await LoginHelper.loginInto();
    });

    it("Search for train", async () => {
        await PageHelper.sendKeys(PageLocator.fromTravel, 'gzb');
        browser.sleep(2000)
        await PageHelper.click(PageLocator.selectOption)
        await PageHelper.sendKeys(PageLocator.toTravel, 'lko');
        browser.sleep(2000)
        await PageHelper.click(PageLocator.selectOption)
        browser.sleep(6000)
    });
  
});


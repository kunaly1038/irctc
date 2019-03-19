import { LazyHelper } from "../Helper_Page/lazy/lazy-helper-fun";
import { LoginPageHelper } from "../Helper_Page/login/login-helper-locate";
import { browser } from "protractor";
import { LoginHelper } from "../Helper_Page/login/login-helper"
describe('angularjs homepage todo list', function () {

    beforeEach(async () => {
        await LoginHelper.loginInto();
    });

    it('should add a todo', function () {
        browser.sleep(5000)
        
    });
  
});


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lazy_helper_fun_1 = require("../lazy/lazy-helper-fun");
const login_helper_locate_1 = require("./login-helper-locate");
const login_constant_1 = require("./login-constant");
const protractor_1 = require("protractor");
class LoginHelper {
    static loginInto() {
        lazy_helper_fun_1.LazyHelper.loginUser();
        lazy_helper_fun_1.LazyHelper.click(login_helper_locate_1.LoginPageHelper.loginBTN);
        protractor_1.browser.sleep(3000);
        lazy_helper_fun_1.LazyHelper.sendKeys(login_helper_locate_1.LoginPageHelper.userameLogin, login_constant_1.LoginConstant.LandingPage.UserName);
        lazy_helper_fun_1.LazyHelper.sendKeys(login_helper_locate_1.LoginPageHelper.passwordLogin, login_constant_1.LoginConstant.LandingPage.Passowrd);
        protractor_1.browser.sleep(15000);
        lazy_helper_fun_1.LazyHelper.click(login_helper_locate_1.LoginPageHelper.submitLogin);
        protractor_1.browser.sleep(15000);
    }
}
exports.LoginHelper = LoginHelper;
//# sourceMappingURL=login-helper.js.map
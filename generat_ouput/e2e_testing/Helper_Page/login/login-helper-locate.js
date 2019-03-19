"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class LoginPageHelper {
    static get loginBTN() { return protractor_1.element(protractor_1.by.xpath("//*[text()=' LOGIN ']")); }
    static get userameLogin() { return protractor_1.element(protractor_1.By.css('[id="userId"]')); }
    static get passwordLogin() { return protractor_1.element(protractor_1.By.css('[id="pwd"]')); }
    static get submitLogin() { return protractor_1.element(protractor_1.By.xpath('//*[text()="SIGN IN"]')); }
}
exports.LoginPageHelper = LoginPageHelper;
//# sourceMappingURL=login-helper-locate.js.map
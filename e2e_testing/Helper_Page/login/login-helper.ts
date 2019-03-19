import { LazyHelper } from "../lazy/lazy-helper-fun";
import { LoginPageHelper } from "./login-helper-locate";
import { LoginConstant } from "./login-constant"
import { browser } from "protractor";
export class LoginHelper{

    static loginInto(){
        LazyHelper.loginUser();
        LazyHelper.click(LoginPageHelper.loginBTN);
        browser.sleep(3000)
        LazyHelper.sendKeys(LoginPageHelper.userameLogin, LoginConstant.LandingPage.UserName)
        LazyHelper.sendKeys(LoginPageHelper.passwordLogin, LoginConstant.LandingPage.Passowrd)
        browser.sleep(15000)
        LazyHelper.click(LoginPageHelper.submitLogin);
        browser.sleep(15000)
    }
}
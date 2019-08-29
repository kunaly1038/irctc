import { PageHelper } from "../lazy/lazy-helper-fun";
import { PageLocator } from "./login-helper-locate";
import { LoginConstant } from "./login-constant"
import { browser } from "protractor";


export class LoginHelper{

    static async loginInto(){
        await PageHelper.loginUser();
        PageLocator.optionalDrop.isDisplayed().then(async bool => {
            console.log('=============================='+bool+'=======================================')
            if(bool==true){
                await PageHelper.click(PageLocator.optionalDrop)
                await PageHelper.click(PageLocator.optionalloginBTN);
                await browser.sleep(3000)
                await PageHelper.sendKeys(PageLocator.userameLogin, LoginConstant.LandingPage.UserName)
                await PageHelper.sendKeys(PageLocator.passwordLogin, LoginConstant.LandingPage.Passowrd)
                await browser.sleep(10000)
                await PageHelper.click(PageLocator.submitLogin);
                await browser.sleep(3000)
                
            }
            else{
                await PageHelper.click(PageLocator.loginBTN);
                await browser.sleep(3000)
                await PageHelper.sendKeys(PageLocator.userameLogin, LoginConstant.LandingPage.UserName)
                await PageHelper.sendKeys(PageLocator.passwordLogin, LoginConstant.LandingPage.Passowrd)
                await browser.sleep(10000)
                await PageHelper.click(PageLocator.submitLogin);
                await browser.sleep(3000)
            }
        });
    }
}

import {element, By, by} from 'protractor';

export class LoginPageHelper{
    static get loginBTN(){ return element(by.xpath("//*[text()=' LOGIN ']"))}
    static get userameLogin(){ return element(By.css('[id="userId"]'))}
    static get passwordLogin(){ return element(By.css('[id="pwd"]'))}
    static get submitLogin(){ return element(By.xpath('//*[text()="SIGN IN"]'))}    
}
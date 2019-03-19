import {element, By} from 'protractor';

export class PageLocator{
    static get optionalDrop(){return element(By.css('[class="h_menu_drop_button hidden-xs"]'))}
    static get loginBTN(){ return element(By.xpath("//*[text()=' LOGIN ']"))}
    static get optionalloginBTN(){ return element(By.xpath("//*[text()='LOGIN']"))}
    static get userameLogin(){ return element(By.css('[id="userId"]'))}
    static get passwordLogin(){ return element(By.css('[id="pwd"]'))}
    static get submitLogin(){ return element(By.xpath('//*[text()="SIGN IN"]'))}    
    static get fromTravel(){ return element(By.css('[placeholder="From*"]'))}
    static get toTravel(){return element(By.css('[placeholder="To*"]'))}
    static get selectOption(){return element(By.css('[class="ng-star-inserted ui-autocomplete-list-item ui-corner-all"]'))}
}

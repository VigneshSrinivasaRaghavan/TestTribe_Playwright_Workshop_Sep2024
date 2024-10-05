import {Page, Locator} from '@playwright/test'
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
readonly page: Page;
private readonly usernameTextbox: Locator;
private readonly passwordTextbox: Locator;
private readonly loginButton: Locator;

constructor(page:Page){
    super(page);
    this.usernameTextbox = page.locator('input[name="username"]');
    this.passwordTextbox = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
}

async enterUsername(usernameText:string){
    await this.enterValuesInElement(this.usernameTextbox,usernameText)
}

async enterPassword(passwordText:string){
    await this.enterValuesInElement(this.passwordTextbox,passwordText)
}

async clickLogin(){
    await this.clickElement(this.loginButton);
}
}
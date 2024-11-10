import { Page } from "@playwright/test";
import { LoginSelector } from "./LoginPageUI_01";

export default class LoginPage01 {

    // Scope to keep element's selector values // Save in page  
    private userNameSelector = '#username';
    private passwordSelector = '#password';
    private loginSelector = '[type = "submit"]';

    // contructor
    constructor(private page: Page) {
        this.page = page;
    }

    // Main interaction methods
    async inputUserName(userName: string) {
        await this.page.locator(LoginSelector.userNameSelector).fill(userName);
    }

    async inputPassword(password: string) {
        await this.page.locator(LoginSelector.passwordSelector).fill(password);
    }

    async clickLoginButton() {
        await this.page.locator(LoginSelector.loginSelector).click();
    }
}
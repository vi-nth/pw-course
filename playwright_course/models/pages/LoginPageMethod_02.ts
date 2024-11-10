import { Page } from "@playwright/test";
import { LoginSelector } from "./LoginPageUI_01";

export default class LoginPage02 {

    // contructor
    constructor(private page: Page) {
        this.page = page;
    }

    // Main interaction methods
    userName() {
        return this.page.locator(LoginSelector.userNameSelector);
    }

    password() {
        return this.page.locator(LoginSelector.passwordSelector);
    }

    loginButton() {
        return this.page.locator(LoginSelector.loginSelector);
    }
    
}
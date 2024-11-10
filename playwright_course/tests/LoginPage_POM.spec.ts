import test from "@playwright/test";
import LoginPage from "../models/pages/LoginPageMethod_01";
import LoginPage01 from "../models/pages/LoginPageMethod_01";
import LoginPage02 from "../models/pages/LoginPageMethod_02";

test('Test POM method 01', async({page}) => {

    // Go to login page
    await page.goto('/login');

    // Init the POM
    const loginPage = new LoginPage01(page);

    // Interact with elements
    await loginPage.inputUserName('tomABC');
    await loginPage.inputPassword('xyz');
    await loginPage.clickLoginButton();

    // Wait to debug
    await page.waitForTimeout(3 * 1000);
})

test('Test POM method 02', async({page}) => {

    // Go to login page
    await page.goto('/login');

    // Init the POM
    const loginPage = new LoginPage02(page);

    // Interact with elements
    await loginPage.userName().fill('tomABC');
    await loginPage.password().fill('xyz');
    await loginPage.loginButton().click();

    // Wait to debug
    await page.waitForTimeout(3 * 1000);
})
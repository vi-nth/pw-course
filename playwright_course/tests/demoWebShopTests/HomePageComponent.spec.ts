import test from "@playwright/test";
import HomePage from "../../models/pages/demoWebShopPage/HomePage";

test('Test Header Component', async ({ page }) => {

    // Go to login page
    await page.goto('https://demowebshop.tricentis.com/');
    const homePage = new HomePage(page);
    const headerComp = homePage.headerCompoment();
    await headerComp.headerLogo().click();
    // Wait to debug
    await page.waitForTimeout(3 * 1000);
})


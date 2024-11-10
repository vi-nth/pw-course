import test from "@playwright/test";
import HomePage from "../../models/pages/demoWebShopPage/HomePage";

test('Test Base Component', async ({ page }) => {

    // Go to login page
    await page.goto('https://demowebshop.tricentis.com/');
    const homePage = new HomePage(page);
    const footerComp = homePage.footerComponent();
    const customerServiceColumnComp = footerComp.customerServiceColumnComponent();
    const columnTitle = await customerServiceColumnComp.title().textContent()
    const columnLinks = await customerServiceColumnComp.links();
    for (let link of columnLinks) {
        const linkText = await link.textContent()
        console.log(linkText);
        ;
    }
    // Wait to debug
    await page.waitForTimeout(3 * 1000);
})


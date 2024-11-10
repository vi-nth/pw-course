import test from "@playwright/test";
import HomePage from "../../models/pages/demoWebShopPage/HomePage";

test('Test List of ProductItem Component', async ({ page }) => {

    // Go to login page
    await page.goto('https://demowebshop.tricentis.com/');
    const homePage = new HomePage(page);
    const pageBodyComp = homePage.pageBodyComponent();
    const productItemCompList = await pageBodyComp.productItemComponentList();

    for (let productItemComp of productItemCompList) {
        const productTitle = await productItemComp.productTitleLoc().textContent();
        const productPrice = await productItemComp.productPriceLoc().textContent();
        console.log(`${productTitle?.trim()}: ${productPrice?.trim()}`);
    }
    // Wait to debug
    await page.waitForTimeout(3 * 1000);
})


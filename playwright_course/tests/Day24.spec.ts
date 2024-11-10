import test from "@playwright/test";

test('Link Text - Xpath', async ({ page }) => {
    await page.goto("/");

    // Find locator by Xpath -> return element handle
    const footerLinkLocator = page.locator("//a[text()='Elemental Selenium']");

    // explicit wait for specific case
    await page.waitForSelector("//a[text()='Elemental Selenium']", { timeout: 15 * 1000 });

    // Click on the link
    await footerLinkLocator.click();

    await page.waitForTimeout(3 * 1000);
})

test('Link Text - Css', async ({ page }) => { //test.only use to run only this test
    await page.goto("/");

    // Find locator by Css -> return element handle
    const footerLinkLocator = page.locator("a:has-text('Elemental')");
    await footerLinkLocator.click();

    await page.waitForTimeout(3 * 1000);
})

test('Link Text - Filtering', async ({ page }) => { //test.only use to run only this test
    await page.goto("/");

    // Filter -> click
    const infiniteScroll = page.locator("a").filter({ hasText: "Infinite Scroll" });
    await infiniteScroll.click();

    await page.waitForTimeout(3 * 1000);
})

test('Form Input', async ({ page }) => { //test.only use to run only this test
    await page.goto("/login");

    await page.locator("#username").fill("cbc");
    await page.locator("#password").fill("123");
    await page.locator("[type='submit']").click();

    let dashboardHeaderText = await page.locator('h2').textContent(); //get full text
    console.log(dashboardHeaderText);

    dashboardHeaderText = await page.locator('h2').innerText(); //get visible text
    console.log(dashboardHeaderText);

    await page.waitForTimeout(3 * 1000);
})


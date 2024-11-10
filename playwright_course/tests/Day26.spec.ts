import test from "@playwright/test";
import { getAdParams, scrollToBottom } from "../utils/PageHelper";

test('Handle JS Alert', async ({ page }) => {
    await page.goto("/javascript_alerts");
    const jsAlertLocator = await page.locator('//button[contains(text(), "JSAlert")]');

    // Must define event handler first
    page.on('dialog', async dialog => {
        await dialog.accept();
    });

    // Trigger event | click button
    await jsAlertLocator.click();

    // Select Option 3 - Label/visible text
    await page.waitForTimeout(3 * 1000);
})

test('Handle JS Confirm', async ({ page }) => {
    await page.goto("/javascript_alerts");
    const jsConfirmLocator = await page.locator('//button[contains(text(), "JS Confirm")]');

    // Must define event handler first
    page.on('dialog', async dialog => {
        // Get the alert content
        console.log(`Alert's event is: ${dialog.message()}`);

        // Dimiss | cancel
        await dialog.dismiss();
    });

    await jsConfirmLocator.click();

    // Select Option 3 - Label/visible text
    await page.waitForTimeout(3 * 1000);
})

test('Handle JS Prompt', async ({ page }) => {
    await page.goto("/javascript_alerts");
    const jsPromptLocator = await page.locator('//button[contains(text(), "JS Prompt")]');

    // Must define event handler first
    page.on('dialog', async dialog => {
        // Get the alert content
        console.log(`Alert's event is: ${dialog.message()}`);

        // Agree with message
        await dialog.accept("I am accepting the prompt");
    });

    await jsPromptLocator.click();

    // Select Option 3 - Label/visible text
    await page.waitForTimeout(3 * 1000);
})

test('Excecute JS snippet without param', async ({ page }) => {
    await page.goto('/floating_menu');

    // Sroll to bottom
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    })
    await page.waitForTimeout(3 * 1000);

    // Scroll to top
    await page.evaluate(() => {
        window.scrollTo(0, 0);
    })

    // Select Option 3 - Label/visible text
    await page.waitForTimeout(3 * 1000);
})

test('Excecute JS snippet with param', async ({ page }) => {
    await page.goto('/floating_menu');

    // Sroll to bottom with percentage param
    await page.evaluate(scrollPercentage => {
        window.scrollTo(0, scrollPercentage * document.body.scrollHeight);
    }, 0.5);

    await page.waitForTimeout(3 * 1000);

    await page.evaluate(scrollPercentage => {
        window.scrollTo(0, scrollPercentage * document.body.scrollHeight);
    }, 0.8);

    await page.waitForTimeout(3 * 1000);

    // Scroll to top with percentage
    await page.evaluate(scrollPercentage => {
        window.scrollTo(0, scrollPercentage * document.body.scrollHeight);
    }, -0.8);

    // Select Option 3 - Label/visible text
    await page.waitForTimeout(3 * 1000);

    await scrollToBottom(page, 0.5);
})

test('Excecute JS snippet with param and return value', async ({ page }) => {
    await page.goto('http://www.foodandwine.com/');
    await page.waitForSelector('#leaderboard-flex-1', {timeout: 10000} );
    const scrollPercentage = 1;
    await scrollToBottom(page, scrollPercentage);
    await page.waitForTimeout(2 * 1000);


    const adParams = await getAdParams(page, 'leaderboard-flex-1');
    console.log(`adParams: ${JSON.stringify(adParams)}`);

     // Select Option 3 - Label/visible text
     await page.waitForTimeout(3 * 1000);
})

import test from "@playwright/test";

test('Default dropdown', async ({ page }) => {
    await page.goto("/dropdown");

    // Taget dropdown element
    const dropdownLocator = page.locator("#dropdown");

    // Select Option 1 - Index
    await selectByIndex(dropdownLocator, 1)
    await page.waitForTimeout(3 * 1000);
    // await dropdownLocator.selectOption({ index: 1 });

    // Select Option 2 - Value
    await dropdownLocator.selectOption({ value: '2' });
    await page.waitForTimeout(3 * 1000);

    // Select Option 3 - Label/visible text
    await dropdownLocator.selectOption({ label: 'Option 1' });
    await page.waitForTimeout(3 * 1000);
})

test('Iframe', async ({ page }) => {
    await page.goto("/iframe");

    await page.locator("body button[class*='tox-button--icon']").click();
    const iframeLocator = page.locator("[id*='ifr']");

    const editArea = iframeLocator.locator("body p");
    await editArea.click();
    await editArea.clear();
    await editArea.fill("test");
})

test('Mouse hover and narrow down searching scope', async ({ page }) => {
    await page.goto("/hovers");

    // Find all elements
    const allElements = await page.locator(".figure").all();

    // Loop over elements
    for (const element of allElements) {
        //Narrow down seaching scope
        const imageLocator = element.locator('img');
        const userNameLocator = element.locator('h5');
        const profifleLocator = element.locator('a');

        let userNameText = await userNameLocator.textContent();
        console.log(userNameText);

        let isUserNameVisible = await userNameLocator.isVisible();
        let isProfileVisible = await profifleLocator.isVisible();
        console.log(isUserNameVisible);
        console.log(isProfileVisible);

        // Mouse hover
        await imageLocator.hover();
        await page.waitForTimeout(1000);

        isUserNameVisible = await userNameLocator.isVisible();
        isProfileVisible = await profifleLocator.isVisible();
        console.log(isUserNameVisible);
        console.log(isProfileVisible);
    }
})

test('Checking element state and handle dynamic states', async ({ page }) => {
    await page.goto("/dynamic_controls");

    // Locate 2 parent component
    const checkboxComponent = await page.locator("#checkbox-example");
    const inputExampleCompoment = await page.locator("#input-example");

    // Interact checkbox element
    const checkboxLocator = checkboxComponent.locator(" input");
    let isCheckboxEnable = await checkboxLocator.isEnabled();
    console.log(isCheckboxEnable);
    let isCheckboxChecked = await checkboxLocator.isChecked();
    if (!isCheckboxChecked) {
        await checkboxLocator.click();
    }

    await page.waitForTimeout(3 * 1000);
    const removeButtonLocator = checkboxComponent.locator("button");
    await removeButtonLocator.click();
    await page.waitForSelector("#checkbox-example>#loading", { state: 'hidden' });

    //Interact with input example
    //Interact with input example
    const inputExampleLocator = inputExampleCompoment.locator(" input");
    const enableButtonLocator = inputExampleCompoment.locator("button");

    let isInputExampleDisable = await inputExampleLocator.isDisabled();
    console.log(isInputExampleDisable)

    // Click button Enable and waiting until loading invisible and textbox is enable to input
    if (isInputExampleDisable) {
        await enableButtonLocator.click();
        await page.waitForSelector("form#input-example > div#loading:not([style])", { state: 'hidden' });
    }

    // Input
    if (await inputExampleLocator.isEnabled()) {
        inputExampleLocator.click();
        inputExampleLocator.clear();
        inputExampleLocator.fill("test");
    }

    // Click Enable button again and check status of textbox
    enableButtonLocator.click();
    isInputExampleDisable = await inputExampleLocator.isDisabled();
    console.log(isInputExampleDisable);

})

// common method
async function selectByIndex(dropdown: any, indexValue: number) {
    await dropdown.selectOption({ index: indexValue });
}

async function selectByValue(dropdown: any, selectedValue: string) {
    await dropdown.selectOption({ value: selectedValue });
}

async function selectByLabel(dropdown: any, selectedLabel: string) {
    await dropdown.selectOption({ label: selectedLabel });
}


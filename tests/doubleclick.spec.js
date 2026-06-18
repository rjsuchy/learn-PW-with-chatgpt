const { test } = require('@playwright/test');

test('Double Click Example', async ({ page }) => {

    await page.goto('https://demoqa.com/buttons');

    // Double click button
    await page.getByText('Double Click Me').dblclick();

});
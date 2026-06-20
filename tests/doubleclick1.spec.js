// Import Playwright
const { test, expect } = require('@playwright/test');

test('Double Click Button', async ({ page }) => {

    // Open website
    await page.goto('https://demoqa.com/buttons');

    // Double click on button
    await page.locator('#doubleClickBtn').dblclick();

    // Verify success message
    await expect(page.locator('#doubleClickMessage'))
        .toHaveText('You have done a double click');
});
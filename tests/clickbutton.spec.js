// Import Playwright
const { test, expect } = require('@playwright/test');

test('Click Button Example', async ({ page }) => {

    // Open website
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

    // Click on Add Element button
    await page.getByRole('button', { name: 'Add Element' }).click();

    // Verify Delete button appears
    await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();

});
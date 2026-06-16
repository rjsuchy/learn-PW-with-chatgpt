// Import Playwright's test and assertion functions
const { test, expect } = require('@playwright/test');

// Create a test case named "Checkbox Test"
test('Checkbox Test', async ({ page }) => {

    // Open the website in the browser
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Check (select) the Sunday checkbox
    await page.check('#sunday');

    // Verify that the Sunday checkbox is checked
    await expect(page.locator('#sunday')).toBeChecked();

    // Check (select) the Monday checkbox
    await page.check('#monday');

    // Verify that the Monday checkbox is checked
    await expect(page.locator('#monday')).toBeChecked();

    // Uncheck (deselect) the Monday checkbox
    await page.uncheck('#monday');

    // Verify that the Monday checkbox is NOT checked
    await expect(page.locator('#monday')).not.toBeChecked();

    // Pause execution for debugging (optional)
    // await page.pause();

});
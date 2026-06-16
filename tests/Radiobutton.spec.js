const { test, expect } = require('@playwright/test');

test('Radio Button Example', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Select Male
    await page.check('#male');

    // Verify Male is selected
    await expect(page.locator('#male')).toBeChecked();

    // Verify Female is not selected
    await expect(page.locator('#female')).not.toBeChecked();

});
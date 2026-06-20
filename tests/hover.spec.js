const { test, expect } = require('@playwright/test');

test('Mouse Hover Example', async ({ page }) => {

    // Open website
    await page.goto('https://the-internet.herokuapp.com/hovers');

    // Hover on first image
    await page.locator('.figure').first().hover();

    // Verify hidden text appears
    await expect(page.locator('text=name: user1')).toBeVisible();
});
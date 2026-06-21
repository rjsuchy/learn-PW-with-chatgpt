const { test, expect } = require('@playwright/test');

test('Hover and click hidden link', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/hovers');

    const firstUser = page.locator('.figure').first();

    // Hover
    await firstUser.hover();

    // Click hidden link
    await firstUser.locator('text=View profile').click();
});
import { test, expect } from '@playwright/test';

test('Check button is enabled', async ({ page }) => {

    await page.goto('https://letcode.in/button');

    const homeBtn = page.locator('#home');

    // Verify button is enabled
    await expect(homeBtn).toBeEnabled();

});
const { test } = require('@playwright/test');

test('Keyboard Enter Key', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/key_presses');

    // Click input field
    await page.locator('#target').click();

    // Press Enter
    await page.keyboard.press('Enter');

    await page.waitForTimeout(3000);

});
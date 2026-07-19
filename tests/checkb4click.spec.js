import { test } from '@playwright/test';

test('Safe Click', async ({ page }) => {

    await page.goto('https://letcode.in/button');

    const btn = page.locator('#home');  // locator bosiye setake check korte parbo.

    if (await btn.isEnabled()) {

        await btn.click();

        console.log('Button is Enable');

    } else {

        console.log('Button is Disabled');

    }

});
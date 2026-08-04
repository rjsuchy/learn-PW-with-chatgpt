import { test } from '@playwright/test';

test('Print page URL', async ({ page }) => {

    await page.goto('https://bdjobs.com');

    console.log(await page.url());

});
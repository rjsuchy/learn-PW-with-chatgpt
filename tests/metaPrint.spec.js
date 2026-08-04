import { test } from '@playwright/test';

test('Check all meta tags', async ({ page }) => {

    await page.goto('https://bdjobs.com');

    const metas = await page.locator('meta').evaluateAll(elements =>
        elements.map(e => e.outerHTML)
    );

    console.log(metas);
});
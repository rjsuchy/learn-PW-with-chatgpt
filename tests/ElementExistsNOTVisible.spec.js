import { test, expect } from '@playwright/test';

test('Element exists but hidden', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

    const loading = page.locator('#finish');

    await expect(loading).toBeHidden();

}); 
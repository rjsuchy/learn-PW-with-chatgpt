import { test, expect } from '@playwright/test';

test('Element exists', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/dynamic-table');

    const table = page.locator('table');

    await expect(table).toBeAttached();

});
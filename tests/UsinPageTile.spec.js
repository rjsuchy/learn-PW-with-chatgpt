import { test, expect } from '@playwright/test';

test('Verify page title manually', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/');

    const title = await page.title();

    console.log(title);

    expect(title).toBe('Practice Test Automation');

});
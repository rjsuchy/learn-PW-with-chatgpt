import { test, expect } from '@playwright/test';

test('Verify viewport meta tag exists', async ({ page }) => {

    // Open the website
    await page.goto('https://bdjobs.com');

    // Locate the viewport meta tag
    const viewportMeta = page.locator('meta[name="viewport"]');

    // Verify that exactly one viewport meta tag exists
    await expect(viewportMeta).toHaveCount(1);

});


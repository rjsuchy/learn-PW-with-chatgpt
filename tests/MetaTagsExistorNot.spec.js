import { test, expect } from '@playwright/test';

test('Verify meta description tag exists', async ({ page }) => {

    await page.goto('https://example.com');

    // Locate the meta tag
    const metaDescription = page.locator('meta[name="description"]');

    // Verify it exists
    await expect(metaDescription).toHaveCount(1);

});
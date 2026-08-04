import { test, expect } from '@playwright/test';

test('Verify viewport meta tag on bdjobs.com', async ({ page }) => {

    // Open the BDJobs website
    await page.goto('https://bdjobs.com');

    // Locate the <meta> tag whose name attribute is "viewport"
    const viewportMeta = page.locator('meta[name="viewport"]');

    // Verify that the viewport meta tag exists
    // Expected: Exactly 1 matching element should be found
    await expect(viewportMeta).toHaveCount(1);

    // Get the value of the "content" attribute
    const contentValue = await viewportMeta.getAttribute('content');

    // Verify that the content attribute is not null
    expect(contentValue).not.toBeNull();

    // Verify that the content contains "width=device-width"
    // We use toContain() because there may be additional values
    // such as "initial-scale=1"
    expect(contentValue).toContain('width=device-width');

});   
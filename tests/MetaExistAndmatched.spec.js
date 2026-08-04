import { test, expect } from '@playwright/test';

test('Verify description meta tag exists and has correct content', async ({ page }) => {

  // Open the website
  await page.goto('https://bdjobs.com');

  // Find the meta description tag
  const metaDescription = page.locator('meta[name="description"]');

  // Check if the meta tag exists
  await expect(metaDescription).toHaveCount(1);

  // Check if the content attribute has the expected value
  await expect(metaDescription).toHaveAttribute(
    'content',
    'Expected Description Text'
  );

});
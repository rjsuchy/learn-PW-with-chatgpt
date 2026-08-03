import { test, expect } from '@playwright/test';

test('Verify enabled button and click it', async ({ page }) => {

  // Open the LetCode Button page
  await page.goto('https://letcode.in/button');

  // Locate the "Find Location" button
  const findLocationBtn = page.getByRole('button', { name: 'Find Location' });

  // Verify the button is enabled
  await expect(findLocationBtn).toBeEnabled();

  // Click the button
  await findLocationBtn.click();

  // Wait for navigation (if any)
  await page.waitForLoadState('load');

  // Print current URL
  console.log("Current URL:", page.url());

});
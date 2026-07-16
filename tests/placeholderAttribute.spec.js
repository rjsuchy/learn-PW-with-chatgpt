import { test, expect } from '@playwright/test';

test('Verify placeholder attribute', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const username = page.locator('#user-name');

  // Attribute value verification
  await expect(username).toHaveAttribute('placeholder', 'Username');

  const password = page.locator('#password');

  await expect(password).toHaveAttribute('type', 'password');
});
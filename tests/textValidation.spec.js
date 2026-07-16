import { test, expect } from '@playwright/test';

test('Text Validation Demo', async ({ page }) => {
  // Open website
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // ---------- Exact Match ----------
  await expect(page.locator('.title')).toHaveText('Products');

  // ---------- Partial Match ----------
  await expect(page.locator('.title')).toContainText('Product');

  // ---------- Count Validation ----------
  await expect(page.locator('.inventory_item')).toHaveCount(6);
});
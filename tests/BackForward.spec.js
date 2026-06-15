const { test, expect } = require('@playwright/test');

test('Browser Back and Forward', async ({ page }) => {

  // Home Page
  await page.goto('https://www.demoblaze.com/');

  // Navigate to Product Page
  await page.click('a[href="prod.html?idp_=1"]');

  // Verify Product Page
  await expect(page).toHaveURL(/prod.html/);

  // Browser Back
  await page.goBack();

  // Verify Home Page
  await expect(page).toHaveURL('https://www.demoblaze.com/');

  // Browser Forward
  await page.goForward();

  // Verify Product Page Again
  await expect(page).toHaveURL(/prod.html/);

});
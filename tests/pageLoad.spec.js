
//method1 : page.waitForLoadState()

const { test } = require('@playwright/test');

test('Page Load Verification', async ({ page }) => {

  await page.goto('https://www.google.com');

   await page.waitForLoadState('load');

  //await page.waitForLoadState('networkidle');

  /*await page.click('button[type="submit"]');

  await expect(
  page.locator('.oxd-topbar-header')).toBeVisible();  */

  console.log('Page fully loaded');

});

//Method2 : Wait Until Network Idle.
//সব Website-এর জন্য Recommended না, কারণ কিছু site continuously background request পাঠায়।


/*Method 3: Verify Important Element Appears
এটাই Real Project-এ সবচেয়ে বেশি ব্যবহার হয়।
ধরো Login করার পর Dashboard Open হবে।*/
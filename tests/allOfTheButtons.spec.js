import { test } from '@playwright/test';

test('Print all buttons', async ({ page }) => {

  await page.goto('https://letcode.in/button');

  const buttons = page.locator('button');

  console.log("Total buttons:", await buttons.count());

  for (let i = 0; i < await buttons.count(); i++) {
    console.log(await buttons.nth(i).textContent());
  }

});
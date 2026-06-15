/* const countryDropdown = page.locator('#country');

import { test, expect } from '@playwright/test';

test('Dropdown Selection Test', async ({ page }) => {
  await page.goto(
    'https://testpages.herokuapp.com/styled/basic-html-form-test.html'
  );

  await page.selectOption(
    'select[name="dropdown"]',
    'dd3'
  );

  await expect(
    page.locator('select[name="dropdown"]')
  ).toHaveValue('dd3');
});

*/

import { test, expect } from '@playwright/test';

test('Dropdown test', async ({ page }) => {

  // 1. Website open করা
  await page.goto('https://practice.expandtesting.com/dropdown');

  // 2. Dropdown থেকে Option 1 select করা
  await page.selectOption('#dropdown', '1');

  // 3. Verify করা যে Option 1 select হয়েছে
  await expect(page.locator('#dropdown')).toHaveValue('1');

});


  
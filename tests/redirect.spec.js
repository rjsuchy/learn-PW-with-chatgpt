//OrangeHRM Login Redirect
/*const { test, expect } = require('@playwright/test');

test('Verify redirect after login', async ({ page }) => {

    test.setTimeout(99900);

  await page.goto('https://opensource-demo.orangehrmlive.com/');

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');

  await page.click('button[type="submit"]');

  // Verify redirected URL

  await expect(page).toHaveURL(/dashboard/);
  console.log('Page fully Redirected');

}); 
*/

const { test, expect } = require('@playwright/test');

test('Check redirected URL', async ({ page }) => {

  await page.goto('http://google.com');

  console.log(page.url());

});
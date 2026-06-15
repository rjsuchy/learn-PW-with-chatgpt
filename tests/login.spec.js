// Navigate 

/* const { test, expect } = require('@playwright/test');

 test('Open Google', async ({ page }) => {

    await page.goto('https://google.com');

    await expect(page).toHaveTitle(/Google/);

 }); */



const { test, expect } =
require('@playwright/test');

test('Login Example', async ({ page }) => {

  test.setTimeout(90000);
 

await page.goto(
 'https://opensource-demo.orangehrmlive.com/'
 );

 await page.fill(
 'input[name="username"]',
 'Admin'
 );

 await page.fill(
 'input[name="password"]',
 'admin123'
 );

 await page.click(
 'button[type="submit"]'
 );

 await expect(page)
 .toHaveURL(/dashboard/);

});
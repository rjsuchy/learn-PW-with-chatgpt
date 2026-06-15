/* const { test } = require('@playwright/test');

test('Open Google', async ({ page }) => {

  await page.goto('https://google.com');

}); 
*/


const { test, expect } = require('@playwright/test');

 test('Open Google for title', async ({ page }) => {

    await page.goto('https://google.com');

    await expect(page).toHaveTitle(/Google/);

 }); 

 //URL check 

 


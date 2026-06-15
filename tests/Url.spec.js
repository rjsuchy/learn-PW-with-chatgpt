const { test, expect } = require('@playwright/test');

test('Verify URL', async ({ page }) => {

    // await page.goto('https://google.com');

    // await expect(page).toHaveURL('https://www.google.com/');


     await page.goto('https://opensource-demo.orangehrmlive.com/');
 
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});
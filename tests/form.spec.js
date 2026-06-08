const { test, expect } =
require('@playwright/test');

test('Fill Form', async ({ page }) => {

 await page.goto(
 'https://demoqa.com/text-box'
 );

 await page.locator('#userName')
 .fill('Rifat');

 await page.locator('#userEmail')
 .fill('rifat@test.com');

 await page.locator('#submit')
 .click();

});
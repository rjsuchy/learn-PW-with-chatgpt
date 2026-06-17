/*const { test, expect } = require('@playwright/test');

test('Upload Single File', async ({ page }) => {

    // Open website
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Upload file
    await page.locator('#singleFileInput').setInputFiles(
        'C:\Users\sochy\Downloads\Playwright_with_VSCode_Training_Guide.pdf'
    );

});  */


const { test, expect } = require('@playwright/test');

test('File Upload Example', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/upload');

    // Upload file
    await page.setInputFiles('#file-upload', 'C:/Users/sochy/Downloads/Playwright_with_VSCode_Training_Guide.pdf');

    // Click Upload button
    await page.click('#file-submit');

    // Verify upload success
    await expect(page.locator('#uploaded-files'))
        .toContainText('Playwright_with_VSCode_Training_Guide.pdf');

});
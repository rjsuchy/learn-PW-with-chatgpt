const { test, expect } = require('@playwright/test');

test('Broken Site Detection', async ({ page }) => {

    const response = await page.goto('https://the-internet.herokuapp.com/', {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });

    // Check response exists
    expect(response).not.toBeNull();

    const statusCode = response.status();

    console.log('Website Status Code:', statusCode);

    // Site should return successful response
    expect(statusCode).toBeLessThan(400);

});
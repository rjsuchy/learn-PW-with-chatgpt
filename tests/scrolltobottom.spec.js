const { test } = require('@playwright/test');

test('Scroll to bottom', async ({ page }) => {

    // Open website
    await page.goto('https://the-internet.herokuapp.com/infinite_scroll');

     test.setTimeout(60000);

    // Scroll down 5 times
    for (let i = 0; i < 5; i++) {

        await page.mouse.wheel(0, 1000);

        // Wait so we can see the scrolling
        await page.waitForTimeout(1000);
    }

});
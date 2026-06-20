const { test, expect } = require('@playwright/test');

test('Right Click Button', async ({ page }) => {

    // Open website
    await page.goto('https://demoqa.com/buttons');

    // Right click
    await page.locator('#rightClickBtn').click({
        button: 'right'
    });

    // Verify result
    await expect(page.locator('#rightClickMessage'))
        .toHaveText('You have done a right click');
});
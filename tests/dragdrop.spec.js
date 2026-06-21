const { test, expect } = require('@playwright/test');

test('Drag And Drop', async ({ page }) => {

    // Open website
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

    // Drag A and drop onto B
    await page.locator('#column-a')
        .dragTo(page.locator('#column-b'));

    // Verify swap happened
    await expect(page.locator('#column-a header'))
        .toHaveText('B');

    await expect(page.locator('#column-b header'))
        .toHaveText('A');
});
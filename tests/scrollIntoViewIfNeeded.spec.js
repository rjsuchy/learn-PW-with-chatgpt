const { test, expect } = require('@playwright/test');

test('Scroll to an element', async ({ page }) => {

    // Open website
    await page.goto('https://the-internet.herokuapp.com/large');

    // Locate an element
    const element = page.locator('text=Row 50');

    // Scroll until the element is visible
    await element.scrollIntoViewIfNeeded();

    // Verify the element is visible
    await expect(element).toBeVisible();

});
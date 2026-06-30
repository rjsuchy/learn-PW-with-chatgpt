/*const { test, expect } = require('@playwright/test');

test('Scroll to specific element', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/large');

    // Find the element
    const element = page.getByText('50');

    // Scroll until the element becomes visible
    await element.scrollIntoViewIfNeeded();

    // Verify it is visible
    await expect(element).toBeVisible();

});  */

const { test, expect } = require('@playwright/test');

test('Scroll to footer', async ({ page }) => {

    await page.goto('https://recruiter.bdjobs.com/');

    const footer = page.locator('footer');

    await footer.scrollIntoViewIfNeeded();

    await expect(footer).toBeVisible();

});
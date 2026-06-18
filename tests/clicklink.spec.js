const { test, expect } = require('@playwright/test');

test('Click Link Example', async ({ page }) => {

    // Open website
    await page.goto('https://the-internet.herokuapp.com');

    // Click Checkbox link
    await page.getByRole('link', { name: 'Checkboxes' }).click();

    // Verify URL changed
    await expect(page).toHaveURL(/checkboxes/);

});
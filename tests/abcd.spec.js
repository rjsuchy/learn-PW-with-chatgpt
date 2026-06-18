// Import Playwright
const { test, expect } = require('@playwright/test');

test('Remove Dynamic Elements', async ({ page }) => {

    // Open website
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

    // Add 3 elements
    for(let i = 1; i <= 10; i++)
    {
        await page.getByText('Add Element').click();
    }

    // Verify 3 buttons created
    await expect(page.locator('.added-manually')).toHaveCount(10);

    // Click first Delete button
    for(let i=1; i<=3; i++){
    await page.locator('.added-manually').first().click();
    }

    // Verify remaining buttons count
    await expect(page.locator('.added-manually')).toHaveCount(7);

});
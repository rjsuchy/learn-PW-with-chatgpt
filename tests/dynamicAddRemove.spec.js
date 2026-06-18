// Playwright test functions import
const { test, expect } = require('@playwright/test');

test('Add Dynamic Elements', async ({ page }) => {

    // Open website
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

    // Click Add Element button
    await page.locator('button:text("Add Element")').click();

    // Verify Delete button appeared
    const deleteBtn = page.locator('.added-manually');

    // Check Delete button is visible
    await expect(deleteBtn).toBeVisible();

});

//Add Multiple Dynamic Fields .ধরো 5 বার Add Element click করবো।

/* // Import Playwright
const { test, expect } = require('@playwright/test');

test('Add Multiple Elements', async ({ page }) => {

    // Open page
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

    // Loop 5 times
    for(let i = 1; i <= 5; i++)
    {
        // Click Add Element button
        await page.getByText('Add Element').click();
    }

    // Locate all Delete buttons
    const deleteButtons = page.locator('.added-manually');

    // Verify total buttons count
    await expect(deleteButtons).toHaveCount(5);

});  */ 

//Remove Dynamic Elements 
/* 
// Import Playwright
const { test, expect } = require('@playwright/test');

test('Remove Dynamic Elements', async ({ page }) => {

    // Open website
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

    // Add 3 elements
    for(let i = 1; i <= 3; i++)
    {
        await page.getByText('Add Element').click();
    }

    // Verify 3 buttons created
    await expect(page.locator('.added-manually')).toHaveCount(3);

    // Click first Delete button
    await page.locator('.added-manually').first().click();

    // Verify remaining buttons count
    await expect(page.locator('.added-manually')).toHaveCount(2);

});   */
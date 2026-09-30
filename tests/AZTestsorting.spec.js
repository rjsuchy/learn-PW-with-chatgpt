const { test, expect } = require('@playwright/test');

test('Verify alphabetical ascending sorting', async ({ page }) => {

    // Open the practice page
    await page.goto('https://the-internet.herokuapp.com/tables');

    // Get all values from the first column of the table
    const names = await page
        .locator('#table1 tbody tr td:nth-child(1)')
        .allTextContents();

    // Print the names so we can see the actual order
    console.log('Actual names:', names);

    // Create a copy of the names and sort it alphabetically
    const expectedNames = [...names].sort();

    // Print the expected alphabetical order
    console.log('Expected names:', expectedNames);

    // Verify that the actual order matches alphabetical order
    expect(names).toEqual(expectedNames);
});
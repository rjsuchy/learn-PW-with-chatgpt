import { test, expect } from '@playwright/test';

test('Verify page title using partial match', async ({ page }) => {

    // Navigate to the website
    await page.goto('https://practice.expandtesting.com/');

    // Verify that the page title contains the word "Practice"
    // It does NOT need to match the entire title.
    await expect(page).toHaveTitle(/Practice/);

});

/*  --------Case-Insensitive Partial Match---------

import { test, expect } from '@playwright/test';

test('Verify title using case-insensitive partial match', async ({ page }) => {

    // Navigate to the website
    await page.goto('https://practice.expandtesting.com/');

    // The 'i' flag ignores uppercase/lowercase differences.
    // "practice", "Practice", and "PRACTICE" will all match.
    await expect(page).toHaveTitle(/practice/i);

});  
 */ 
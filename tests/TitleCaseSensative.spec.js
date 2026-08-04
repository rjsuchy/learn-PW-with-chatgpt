import { test, expect } from '@playwright/test';

test('Verify title (Case Insensitive)', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/');

    await expect(page).toHaveTitle(/practice/i); // এখানে i মানে case-insensitive। অর্থাৎ Practice, practice, PRACTICE—সবই match করবে।

});
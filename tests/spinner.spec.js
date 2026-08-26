/*import { test } from '@playwright/test';

test('Inspect spinner element', async ({ page }) => {

    // Open the real practice website
    await page.goto('https://playwrightlab.github.io/');

    // Find Toggle Spinner button
    const spinnerButton = page.getByRole('button', {
        name: 'Toggle Spinner'
    });

    // Click the button
    await spinnerButton.click();

    // Find all elements that contain "spinner" in their class
    const spinners = page.locator('[class*="spinner"]');

    // Count matching elements
    const count = await spinners.count();

    console.log('Spinner-like elements:', count);

    // Print their class names
    for (let i = 0; i < count; i++) {
        console.log(
            `Spinner ${i + 1}:`,
            await spinners.nth(i).getAttribute('class')
        );
    }
}); 
//Perfect ✅ এবার actual DOM থেকে আমরা পেলাম:  (PASSED)

Spinner-like elements: 2
Spinner 1: spinner-container
Spinner 2: spinner


*/



import { test, expect } from '@playwright/test';

test('Validate loading spinner', async ({ page }) => {

    // Open the real practice website
    await page.goto('https://playwrightlab.github.io/');

    // Find the Toggle Spinner button
    const spinnerButton = page.getByRole('button', {
        name: 'Toggle Spinner'
    });

    // Find the actual spinner element
    const spinner = page.locator('.spinner');

    // Click Toggle Spinner
    await spinnerButton.click();

    // Verify spinner is visible
    await expect(spinner).toBeVisible();

    // Print confirmation
    console.log('Spinner is visible');

    // Click Toggle Spinner again
    await spinnerButton.click();

    // Verify spinner is hidden
    await expect(spinner).toBeHidden();

    // Print confirmation
    console.log('Spinner is hidden');
});
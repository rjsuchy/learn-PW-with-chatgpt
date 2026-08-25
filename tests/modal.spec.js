import { test, expect } from '@playwright/test';

test('Handle real HTML Modal', async ({ page }) => {

    // Open the real practice website
    await page.goto('https://playwrightlab.github.io/');

    // Click "Open Modal"
    await page.getByRole('button', { name: 'Open Modal' }).click();

    // Locate the modal
    const modal = page.getByRole('dialog');

    // Verify that the modal is visible
    await expect(modal).toBeVisible();

    // Print modal text
    console.log('Modal text:', await modal.innerText());

    // Close the modal
    await modal.getByRole('button', { name: /close/i }).click();

    // Verify that the modal is no longer visible
    await expect(modal).toBeHidden();
});
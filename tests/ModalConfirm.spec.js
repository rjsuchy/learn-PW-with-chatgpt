import { test, expect } from '@playwright/test';

test('Handle modal Confirm button', async ({ page }) => {

    // Open real website
    await page.goto('https://playwrightlab.github.io/');

    // Open the modal
    await page.getByRole('button', { name: 'Open Modal' }).click();

    // Locate modal
    const modal = page.getByRole('dialog');

    // Verify modal is visible
    await expect(modal).toBeVisible();

    // Click Confirm button inside modal
    await modal.getByRole('button', { name: 'Confirm' }).click();

    // Verify modal is closed
    await expect(modal).toBeHidden();
});
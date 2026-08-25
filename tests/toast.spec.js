/*

import { test, expect } from '@playwright/test';

test('Validate success toast notification', async ({ page }) => {

    // Open the real practice website
    await page.goto('https://playwrightlab.github.io/');

    // Find the Success Toast button
    const successButton = page.getByTestId('toast-success');

    // Click Success Toast
    await successButton.click();

    // Locate the toast notification
    const toast = page.locator('.toast').filter({ visible: true });

    // Verify toast is visible
    await expect(toast).toBeVisible();

    // Get the actual toast message
    const toastText = await toast.innerText();

    // Print the actual message
    console.log('Toast message:', toastText);

    // Verify toast contains some text
    expect(toastText.trim()).not.toBe('');

    // Wait until toast disappears
    await expect(toast).toBeHidden();
});    */



import { test, expect } from '@playwright/test';

test('Validate success toast notification', async ({ page }) => {

    // Open the real practice website
    await page.goto('https://playwrightlab.github.io/');

    // Find the Success Toast button
    const successButton = page.getByTestId('toast-success');

    // Click Success Toast
    await successButton.click();

    // Locate the visible toast
    const toast = page.locator('.toast').filter({ visible: true });

    // Verify toast is visible
    await expect(toast).toBeVisible();

    // Get the actual toast message
    const toastText = await toast.innerText();

    // Print the toast message
    console.log('Toast message:', toastText);

    // Verify the toast contains the expected success message
    await expect(toast).toContainText('Success!');

    // Verify the toast contains the operation message
    await expect(toast).toContainText(
        'Operation completed successfully.'
    );
});
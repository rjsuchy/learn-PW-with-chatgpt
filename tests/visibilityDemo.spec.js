import { test, expect } from '@playwright/test';
test('Check First Name field visibility', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form'
);

const firstName = page.locator('#firstName');

// Visibility check
await expect(firstName).toBeVisible();
console.log('First Name field is visible');
});
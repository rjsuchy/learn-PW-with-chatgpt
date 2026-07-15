import { test, expect } from '@playwright/test';
test('Check radio button availability', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form'
);
const genderRadioButtons = page.locator('input[name="gender"]');

// Count matching elements
const count = await genderRadioButtons.count();
console.log('Total gender radio buttons:', count);

// Verify there are 3 radio buttons
expect(count).toBe(3);
});
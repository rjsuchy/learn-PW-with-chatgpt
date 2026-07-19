import { test, expect } from '@playwright/test';

test('Check disabled button', async ({ page }) => {

    await page.goto('https://letcode.in/button');

    await page.waitForLoadState('networkidle');

    const disabledBtn = page.getByRole('button', { name: 'Disabled' });

    // Verify button is disabled
    await expect(disabledBtn).toBeDisabled();

    // Locator count
    console.log(await disabledBtn.count());

});
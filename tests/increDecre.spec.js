import { test, expect } from '@playwright/test';

test('Increment and Decrement Number Input', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/inputs');

    const numberInput = page.locator('#input-number');

    // Set initial value
    await numberInput.fill('5');

    // Increment
    await numberInput.press('ArrowUp');
    await expect(numberInput).toHaveValue('6');

    // Decrement
    await numberInput.press('ArrowDown');
    await expect(numberInput).toHaveValue('5');

});
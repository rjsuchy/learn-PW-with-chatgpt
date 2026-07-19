import { test, expect } from '@playwright/test';

test('CSS Property Validation', async ({ page }) => {

    // Step 1: Open the website
    await page.goto('https://practice.expandtesting.com/');

    // Step 2: Locate the H1 heading
    const heading = page.locator('h1');

    // Step 3: Get the Font Size using getComputedStyle()
    const fontSize = await heading.evaluate(el =>
        getComputedStyle(el).fontSize
    );

    // Step 4: Get the Font Weight
    const fontWeight = await heading.evaluate(el =>
        getComputedStyle(el).fontWeight
    );

    // Step 5: Get the Text Color
    const color = await heading.evaluate(el =>
        getComputedStyle(el).color
    );

    // Step 6: Print the values in the terminal
    console.log("Font Size:", fontSize);
    console.log("Font Weight:", fontWeight);
    console.log("Text Color:", color);

    // Step 7: Verify the Font Size
    expect(fontSize).toBe('32px');

    // Step 8: Verify the Font Weight
    expect(fontWeight).toBe('500');

    // Step 9: Verify the Text Color
    expect(color).toBe('rgb(24, 43, 69)');

});
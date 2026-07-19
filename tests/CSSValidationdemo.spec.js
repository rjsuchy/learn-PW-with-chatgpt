import { test, expect } from '@playwright/test';

test('CSS Property Validation', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com');

    const heading = page.locator('h1');

    const fontSize = await heading.evaluate(el =>
        getComputedStyle(el).fontSize
    );

    console.log('Font size is:',fontSize);

// Font Weight
    const weight = await heading.evaluate(el =>
    getComputedStyle(el).fontWeight
);

console.log('Weight is:',weight);

//Text Color

const color = await heading.evaluate(el =>
    getComputedStyle(el).color
);

console.log('Color is:', color);

});
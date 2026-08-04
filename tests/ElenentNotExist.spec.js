import { test, expect } from '@playwright/test';

test('Element does not exist', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/dynamic-table');

    const btn = page.getByRole('button', { name: 'Register' });

    await expect(btn).toHaveCount(0);

});

/*  Why toHaveCount(0)?

Locator kono element na pele

Count = 0

tai

await expect(locator).toHaveCount(0);

best way.

Alternative

expect(await btn.count()).toBe(0);

kintu

Playwright recommendation

await expect(btn).toHaveCount(0);
Example

Suppose page

Home
About
Contact

Check

const blog = page.getByText("Blog");

await expect(blog).toHaveCount(0);

✔ Pass  */
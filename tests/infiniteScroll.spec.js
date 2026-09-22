/*
import { test } from '@playwright/test';

test('Inspect infinite scroll page', async ({ page }) => {

    await page.goto('https://playwrightlab.github.io/');

    // Print page title
    console.log('TITLE:', await page.title());

    // Print visible body text
    console.log(await page.locator('body').innerText());

});   */

/* import { test, expect } from '@playwright/test';

test('Validate infinite scroll loads more items', async ({ page }) => {

    // Open the practice website
    await page.goto('https://playwrightlab.github.io/');

    // Locate all infinite-scroll items
    // Actual page has: Item #1, Item #2, Item #3...
    const items = page.getByText(/^Item #\d+$/);

    // Get initial number of items
    const initialCount = await items.count();

    console.log('Initial items:', initialCount);

    // Make sure items are available
    expect(initialCount).toBeGreaterThan(0);

    // Get the last currently loaded item
    const lastItem = items.last();

    // Scroll the last item into view
    await lastItem.scrollIntoViewIfNeeded();

    // Wait for more items to load
    await expect(items).toHaveCount(
        initialCount + 5,
        { timeout: 10000 }
    );

    // Get new count
    const newCount = await items.count();

    console.log('Items after scrolling:', newCount);

    // Verify more items were loaded
    expect(newCount).toBeGreaterThan(initialCount);
}); */

import { test, expect } from '@playwright/test';

test('Validate infinite scroll loads more items', async ({ page }) => {

    // Open the practice website
    await page.goto('https://playwrightlab.github.io/');

    // Locate infinite scroll items
    const items = page.getByText(/^Item #\d+$/);

    // Get initial number of items
    const initialCount = await items.count();

    console.log('Initial items:', initialCount);

    // Make sure initial items are available
    expect(initialCount).toBeGreaterThan(0);

    // Get the last currently loaded item
    const lastItem = items.last();

    // Scroll the last item into view
    await lastItem.scrollIntoViewIfNeeded();

    // Wait until at least one new item is loaded
    await expect.poll(
        async () => await items.count(),
        {
            timeout: 10000
        }
    ).toBeGreaterThan(initialCount);

    // Get the new count
    const newCount = await items.count();

    console.log('Items after scrolling:', newCount);

    // Verify more items were loaded
    expect(newCount).toBeGreaterThan(initialCount);
});
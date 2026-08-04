import { test, expect } from '@playwright/test';

test('Verify page title', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/');

    await expect(page).toHaveTitle('Automation Testing Practice Website for QA and Developers | UI and API');

});

/*   Explanation - Full match
await page.goto(...)

→ Open website

await expect(page).toHaveTitle(...)

→ Compare browser title with expected title.

If same → Pass

If different → Fail
*/
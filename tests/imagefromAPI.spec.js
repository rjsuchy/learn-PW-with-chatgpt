import { test, expect } from '@playwright/test';

test('Check images via API request', async ({ page }) => {

    await page.goto('https://recruiter.bdjobs.com/');

    const images = page.locator('img');
    const count = await images.count();

    console.log(`Total Images: ${count}`);

    for (let i = 0; i < count; i++) {

        const src = await images.nth(i).getAttribute('src');

        if (!src) continue;

        // Make full image URL
        const imageURL = new URL(src, page.url()).href;

        // Send API request
        const response = await page.request.get(imageURL);

        console.log(
            `${response.status()} -> ${imageURL}`
        );

        // Image should return 2xx
        expect(response.ok()).toBeTruthy();
    }
});
import { test, expect } from '@playwright/test';

test('Check all images do not have empty alt', async ({ page }) => {

    // Open the website
    await page.goto('https://recruiter.bdjobs.com/dashboard');

    // Find all images
    const images = page.locator('img');

    // Count total images
    const imageCount = await images.count();

    console.log('Total images:', imageCount);

    // Check every image one by one
    for (let i = 0; i < imageCount; i++) {

        // Get the current image
        const image = images.nth(i);

        // Get alt attribute value
        const alt = await image.getAttribute('alt');

        console.log(`Image ${i + 1} alt:`, alt);

        // Check alt is NOT empty
        expect(
            alt,
            `Image ${i + 1} has an empty alt attribute`
        ).not.toBe('');
    }
});
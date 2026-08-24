import { test, expect } from '@playwright/test';

test('Check all images have alt attribute', async ({ page }) => {

    // Open the website
    await page.goto('https://bdjobs.com/h');

    // Find all image elements on the page
    const images = page.locator('img');

    // Count how many images are available
    const imageCount = await images.count();

    console.log('Total images:', imageCount);

    // Check each image one by one
    for (let i = 0; i < imageCount; i++) {

        // Get the current image
        const image = images.nth(i);

        // Get the alt attribute
        const alt = await image.getAttribute('alt');

        console.log(`Image ${i + 1} alt:`, alt);

        // Check that alt attribute exists
        expect(
            alt,
            `Image ${i + 1} is missing the alt attribute`
        ).not.toBeNull();
    }
});
import { test, expect } from '@playwright/test';

test('Check that alt text is not too short', async ({ page }) => {

    // Open the website
    await page.goto('https://recruiter.bdjobs.com/', {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });

    // Find all images
    const images = page.locator('img');

    // Get total number of images
    const totalImages = await images.count();

    console.log(`Total images: ${totalImages}`);

    // Check every image
    for (let i = 0; i < totalImages; i++) {

        // Get alt text
        const altText = await images.nth(i).getAttribute('alt');

        console.log(`Image ${i + 1} alt: "${altText}"`);

        // Skip images without an alt attribute
        // That is a separate accessibility check
        if (altText === null) {
            continue;
        }

        // Remove unnecessary spaces
        const cleanAltText = altText.trim();

        // Skip empty alt text
        if (cleanAltText === '') {
            continue;
        }

        // Check that alt text has at least 3 characters
        expect(
            cleanAltText.length,
            `Image ${i + 1} has too-short alt text: "${altText}"`
        ).toBeGreaterThanOrEqual(3);
    }
});
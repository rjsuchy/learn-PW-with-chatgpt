import { test, expect } from '@playwright/test';

test('Check images do not have generic alt text', async ({ page }) => {

    // Open Bdjobs Recruiter dashboard
    await page.goto('https://recruiter.bdjobs.com/dashboard');

    // Find all images
    const images = page.locator('img');

    // Count total images
    const imageCount = await images.count();

    console.log('Total images:', imageCount);

    // Generic words that should not be used as alt text
    const genericWords = [
        'image',
        'photo',
        'picture',
        'img'
    ];

    // Check every image
    for (let i = 0; i < imageCount; i++) {

        // Get current image
        const image = images.nth(i);

        // Get alt text
        const alt = await image.getAttribute('alt');

        console.log(`Image ${i + 1} alt:`, alt);

        // Skip images where alt is missing
        if (alt === null) {
            continue;
        }

        // Convert alt text to lowercase
        const altLower = alt.toLowerCase().trim();

        // Check if alt text is a generic word
        expect(
            genericWords,
            `Image ${i + 1} has generic alt text: "${alt}"`
        ).not.toContain(altLower);
    }
});
import { test, expect } from '@playwright/test';

test('Check if images are loaded properly', async ({ page }) => {

    // Step 1: Open Bdjobs Recruiter
    await page.goto('https://recruiter.bdjobs.com/');

    // Step 2: Find all images
    const images = page.locator('img');

    const totalImages = await images.count();

    console.log(`Total Images Found: ${totalImages}`);

    // Step 3: Store broken images
    const brokenImages = [];

    // Step 4: Check every image
    for (let i = 0; i < totalImages; i++) {

        const image = images.nth(i);

        const src = await image.getAttribute('src');

        // Step 5: Get naturalWidth
        const naturalWidth = await image.evaluate(
            img => img.naturalWidth
        );

        console.log(
            `${src} -> naturalWidth: ${naturalWidth}`
        );

        // Step 6: If naturalWidth = 0,
        // the image is broken
        if (naturalWidth === 0) {

            brokenImages.push(src);

        }
    }

    // Step 7: Print broken images
    console.log('\nBroken Images:');

    console.log(brokenImages);

    // Step 8:
    // Bdjobs real website
    // There should be no broken images
    expect(brokenImages).toEqual([]);

});
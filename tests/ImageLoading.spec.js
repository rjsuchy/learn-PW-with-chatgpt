const { test, expect } = require('@playwright/test');

test('Check if images are loaded properly', async ({ page }) => {

    // Step 1: Open the demo page
    await page.goto('https://the-internet.herokuapp.com/broken_images', {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });

    // Step 2: Find all images from the page
    const images = page.locator('img');

    // Step 3: Get total number of images
    const imageCount = await images.count();

    console.log('Total Images Found:', imageCount);

    // Array to store broken images
    const brokenImages = [];

    // Step 4: Check each image one by one
    for (let i = 0; i < imageCount; i++) {

        const image = images.nth(i);

        // Get image source URL
        const src = await image.getAttribute('src');

        // naturalWidth = 0 normally means the image failed to load
        const naturalWidth = await image.evaluate(
            img => img.naturalWidth
        );

        console.log(`${src} -> naturalWidth: ${naturalWidth}`);

        // Step 5: If width is 0, consider image broken
        if (naturalWidth === 0) {

            brokenImages.push(src);

        }
    }

    // Step 6: Print broken images
    console.log('\nBroken Images:');
    console.log(brokenImages);

    // Step 7: Test should fail if broken images exist
    expect(brokenImages).toEqual([]);

});
/*
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

*/


/*
import { test, expect } from '@playwright/test';

test('Check if images are loaded properly', async ({ page }) => {

    // Step 1: Open DemoQA Broken Images page
    await page.goto('https://demoqa.com/broken', {
        waitUntil: 'domcontentloaded'
    });

    // Step 2: Find all images
    const images = page.locator('img');
    const totalImages = await images.count();

    console.log(`Total Images Found: ${totalImages}`);

    const brokenImages = [];

    // Step 3: Check every image
    for (let i = 0; i < totalImages; i++) {

        const image = images.nth(i);

        // Get image src
        const src = await image.getAttribute('src');

        // Step 4: Scroll image into view
        await image.scrollIntoViewIfNeeded();

        // Step 5: Wait until browser finishes loading image
        await expect.poll(
            async () => {
                return await image.evaluate(img => img.complete);
            },
            {
                timeout: 5000
            }
        ).toBe(true);

        // Step 6: Get naturalWidth
        const naturalWidth = await image.evaluate(
            img => img.naturalWidth
        );

        console.log(`${src} -> naturalWidth: ${naturalWidth}`);

        // Step 7: Check for broken image
        if (naturalWidth === 0) {
            brokenImages.push(src);
        }
    }

    console.log('\nBroken Images:');
    console.log(brokenImages);

    // Step 8: Fail if broken images exist
    expect(brokenImages).toEqual([]);
});

*/

import { test, expect } from '@playwright/test';

test('Check if images are loaded properly', async ({ page }) => {

    // Step 1: Open DemoQA
    await page.goto('https://demoqa.com/broken');

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
    // Demo page should contain broken images
    expect(brokenImages.length).toBeGreaterThan(0);
});
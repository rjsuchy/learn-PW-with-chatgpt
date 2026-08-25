import { test, expect } from '@playwright/test';

test('Check alt text does not start with image of, photo of, or picture of', async ({ page }) => {

    // Open the website
    await page.goto('https://recruiter.bdjobs.com/');

    // Find all images on the page
    const images = page.locator('img');

    // Get total number of images
    const totalImages = await images.count();

    console.log(`Total images: ${totalImages}`);

    // Check each image one by one
    for (let i = 0; i < totalImages; i++) {

        // Get the alt attribute of the current image
        const altText = await images.nth(i).getAttribute('alt');

        console.log(`Image ${i + 1} alt: ${altText}`);

        // Skip images that don't have an alt attribute
        if (altText === null) {
            continue;
        }

        // Convert alt text to lowercase
        // This makes the check case-insensitive
        const altLower = altText.toLowerCase();

        // Check that alt text does NOT start with these phrases
        expect(altLower).not.toMatch(/^image of/);
        expect(altLower).not.toMatch(/^photo of/);
        expect(altLower).not.toMatch(/^picture of/);
    }
});


//bdjob.com/h er jnno chromium e pass hoyse , recruiter e full pass hoyse. 

/* if time out issue thn try this 
import { test, expect } from '@playwright/test';

test('Check alt text does not start with image of, photo of, or picture of', async ({ page }) => {

    // Open the website
    // domcontentloaded = continue once the HTML document is loaded
    await page.goto('https://bdjobs.com/h', {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });

    // Find all images on the page
    const images = page.locator('img');

    // Get total number of images
    const totalImages = await images.count();

    console.log(`Total images: ${totalImages}`);

    // Check each image one by one
    for (let i = 0; i < totalImages; i++) {

        // Get the alt attribute
        const altText = await images.nth(i).getAttribute('alt');

        console.log(`Image ${i + 1} alt: ${altText}`);

        // If alt attribute does not exist, skip this image
        if (altText === null) {
            continue;
        }

        // Convert alt text to lowercase
        // So "Image Of" and "image of" are treated the same
        const altLower = altText.toLowerCase();

        // Alt text should NOT start with "image of"
        expect(altLower).not.toMatch(/^image of/);

        // Alt text should NOT start with "photo of"
        expect(altLower).not.toMatch(/^photo of/);

        // Alt text should NOT start with "picture of"
        expect(altLower).not.toMatch(/^picture of/);
    }
});

*/
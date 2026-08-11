const { test, expect } = require('@playwright/test');

// Test case: Check all links on the page and find broken links
test('Broken Link Detection', async ({ page, request }) => {

    // Step 1: Open the demo website page
    await page.goto('https://the-internet.herokuapp.com/status_codes', {
        waitUntil: 'domcontentloaded', // Wait until HTML content is loaded
        timeout: 60000 // Maximum waiting time: 60 seconds
    });

    // Step 2: Find all <a> tags from the page
    // Then get their href/link values
    const links = await page.locator('a').evaluateAll(elements =>
        elements
            .map(element => element.href) // Get URL from each link
            .filter(href => href.startsWith('http')) // Keep only HTTP/HTTPS links
    );

    // Step 3: Print total number of links found
    console.log('Total Links Found:', links.length);

    // Step 4: Create an empty array
    // Broken links will be stored here
    const brokenLinks = [];

    // Step 5: Check every link one by one
    for (const link of links) {

        try {

            // Step 6: Send GET request to the current link
            const response = await request.get(link, {
                timeout: 30000 // Wait maximum 30 seconds for each link
            });

            // Step 7: Get HTTP status code
            const status = response.status();

            // Print status code and URL in console
            console.log(`${status} -> ${link}`);

            // Step 8:
            // Status code 400 or above means the link has an error
            // Examples: 404, 500, 503 etc.
            if (status >= 400) {

                // Add the broken link information to the array
                brokenLinks.push({
                    url: link,
                    status: status
                });

            }

        } catch (error) {

            // Step 9:
            // If the request completely fails
            // For example: timeout, DNS error, connection error
            // Store that link as broken
            brokenLinks.push({
                url: link,
                error: error.message
            });

        }
    }

    // Step 10: Print all broken links in the console
    console.log('\nBroken Links Found:');
    console.log(brokenLinks);

    // Step 11:
    // Test will PASS only when brokenLinks array is empty
    // If any broken link is found, the test will FAIL
    expect(brokenLinks).toEqual([]);

});
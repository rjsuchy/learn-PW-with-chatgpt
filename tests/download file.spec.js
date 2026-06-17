const { test, expect } = require('@playwright/test');

test('Download and Save File', async ({ page }) => {

    // Step 1: Open the download website
    await page.goto('https://the-internet.herokuapp.com/download');


    // Step 2: Start listening for the download event
    // Playwright will wait until a file download starts
    const downloadPromise = page.waitForEvent('download');


    // Step 3: Click on a file link to download it
    // You can change the file name if needed
    await page.click('text=some-file.txt');


    // Step 4: Capture the downloaded file
    const download = await downloadPromise;


    // Step 5: Get the downloaded file name
    const fileName = await download.suggestedFilename();

    // Print file name in terminal
    console.log('Downloaded file name:', fileName);


    // Step 6: Save the downloaded file
    // The file will be saved inside the downloads folder
    await download.saveAs(`downloads/${fileName}`);


    // Step 7: Print success message
    console.log('File saved successfully.');

});

/*
Open Website
      ↓
Wait for Download Event
      ↓
Click Download Link
      ↓
Capture Download
      ↓
Get File Name
      ↓
Save File
      ↓
Test Passed ✅
*/
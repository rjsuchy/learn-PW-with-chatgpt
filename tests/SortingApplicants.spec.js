
const { test, expect } = require('@playwright/test');

// Increase test timeout
test.setTimeout(120000);

test('TEST 124 - Applicant Name A-Z Sorting', async ({ page }) => {

  // ==========================================
  // STEP 1: OPEN RECRUITER WEBSITE
  // ==========================================

  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'domcontentloaded'
  });

  console.log('Recruiter website opened');


  // ==========================================
  // STEP 2: CLICK SIGN IN
  // ==========================================

  // Click Sign In button if login form is not visible
  const passwordField = page.locator('input[type="password"]');

  if (!(await passwordField.isVisible())) {
    await page.getByText('Sign In', {
      exact: true
    }).first().click();
  }


  // ==========================================
  // STEP 3: LOGIN
  // ==========================================

  // Enter username
  await page.locator(
    'input[name="username"], input[name="userName"], input[type="text"]'
  ).first().fill('sadman_test');

  // Enter password
  await page.locator('input[type="password"]')
    .first()
    .fill('12345678');

  // Submit login
  await page.locator('input[type="password"]')
    .first()
    .press('Enter');

  // Verify dashboard opened
  await expect(page).toHaveURL(/dashboard/i, {
    timeout: 30000
  });

  console.log('PASS: Login successful');


  // ==========================================
  // STEP 4: CLICK PREMIUM PLUS TEST JOB
  // ==========================================

  // Find job card by its title
  const jobCard = page.getByText('Premium plus test', {
    exact: true
  }).first();

  // Verify job card is visible
  await expect(jobCard).toBeVisible();

  // Click job card
  await jobCard.click();

  // Verify applicant processing page opened
  await expect(page).toHaveURL(
    /recruitment-center\/applicants/,
    { timeout: 30000 }
  );

  // Verify correct Job ID
  await expect(page).toHaveURL(/jobno=1495962/);

  console.log('PASS: Applicant Processing page opened');


  // ==========================================
  // STEP 5: CLICK ALL APPLICANTS
  // ==========================================

  // Select All Applicants tab
  await page.getByText('All Applicants', {
    exact: false
  }).first().click();

  console.log('All Applicants selected');


  // ==========================================
  // STEP 6: CLICK SORT BUTTON
  // ==========================================

  const sortButton = page.getByText('Sort', {
    exact: true
  }).first();

  // Verify Sort button is visible
  await expect(sortButton).toBeVisible();

  // Open sorting dropdown
  await sortButton.click();

  console.log('Sorting dropdown opened');


  // ==========================================
  // STEP 7: VERIFY SORTING OPTIONS
  // ==========================================

  const sortingOptions = [
    'Matching (%)',
    'Latest Applied',
    'Early Applied',
    'Applicant Name (A-Z)',
    'Video CV'
  ];

  for (const option of sortingOptions) {

    // Verify each option exists
    await expect(
      page.getByText(option, { exact: true })
    ).toBeVisible();

    console.log('Option found:', option);
  }


  // ==========================================
  // STEP 8: SELECT APPLICANT NAME (A-Z)
  // ==========================================

  await page.getByText('Applicant Name (A-Z)', {
    exact: true
  }).click();

  console.log('Applicant Name (A-Z) selected');


  // ==========================================
  // STEP 9: COLLECT APPLICANT NAMES
  // ==========================================

  // IMPORTANT:
  // These are candidate selectors.
  // Actual selector must match the website HTML.

  const applicantNames = page.locator(
    '.applicant-name, .applicantName, .candidate-name'
  );

  // Wait for applicant names to appear
  await expect.poll(
    async () => applicantNames.count(),
    { timeout: 15000 }
  ).toBeGreaterThan(1);

  // Get all applicant names
  const actualNames = await applicantNames.allTextContents();

  // Remove extra spaces
  const cleanNames = actualNames
    .map(name => name.trim())
    .filter(name => name.length > 0);

  // Ensure enough names were collected
  expect(cleanNames.length).toBeGreaterThan(1);

  console.log('Actual Applicant Order:');
  console.log(cleanNames);


  // ==========================================
  // STEP 10: CREATE EXPECTED A-Z ORDER
  // ==========================================

  // Copy the actual names and sort them
  const expectedNames = [...cleanNames].sort(
    (a, b) => a.localeCompare(b, 'en', {
      sensitivity: 'base'
    })
  );

  console.log('Expected A-Z Order:');
  console.log(expectedNames);


  // ==========================================
  // STEP 11: VERIFY A-Z SORTING
  // ==========================================

  // Compare actual UI order with expected order
  expect(
    cleanNames,
    'Applicant names are not sorted A-Z'
  ).toEqual(expectedNames);

  console.log('PASS: Applicant Name A-Z sorting is correct');


  // ==========================================
  // STEP 12: TAKE SCREENSHOT
  // ==========================================

  await page.screenshot({
    path: 'test124-applicant-sorting.png',
    fullPage: true
  });

  console.log('TEST 124 completed successfully');

});


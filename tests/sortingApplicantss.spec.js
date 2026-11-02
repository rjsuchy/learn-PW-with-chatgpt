
const { test, expect } = require('@playwright/test');

// Maximum time for the complete test
test.setTimeout(120000);

test('TEST 124 - Applicant Name A-Z Sorting (Page 1)', async ({ page }) => {

  // =========================================
  // STEP 1: OPEN RECRUITER WEBSITE
  // =========================================

  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'domcontentloaded'
  });

  console.log('Recruiter website opened');


  // =========================================
  // STEP 2: OPEN LOGIN PAGE
  // =========================================

  const passwordField = page.locator('input[type="password"]').first();

  if (!(await passwordField.isVisible())) {
    await page.getByText('Sign In', {
      exact: true
    }).first().click();
  }


  // =========================================
  // STEP 3: LOGIN
  // =========================================

  await page.locator(
    'input[name="username"], input[name="userName"], input[type="text"]'
  ).first().fill('sadman_test');

  await passwordField.fill('12345678');

  await passwordField.press('Enter');

  await expect(page).toHaveURL(/dashboard/i, {
    timeout: 30000
  });

  console.log('PASS: Login successful');


  // =========================================
  // STEP 4: OPEN TEST JOB
  // =========================================

  // Job used in your previous Playwright test
  const jobCard = page.getByText('Premium plus test', {
    exact: true
  }).first();

  await expect(jobCard).toBeVisible({
    timeout: 20000
  });

  await jobCard.click();

  await expect(page).toHaveURL(
    /recruitment-center\/applicants/,
    { timeout: 30000 }
  );

  console.log('PASS: Applicant Processing page opened');


  // =========================================
  // STEP 5: SELECT ALL APPLICANTS
  // =========================================

  await page.getByRole('button', {
    name: /All Applicants/
  }).click();

  console.log('PASS: All Applicants selected');


  // =========================================
  // STEP 6: LOCATE APPLICANT NAMES
  // =========================================

  // Verified using your Chrome DevTools
  const applicantNames = page.locator(
    'button.text-base.text-left.font-bold.break-words'
  );

  // Wait until applicant names are loaded
  await expect.poll(
    async () => applicantNames.count(),
    { timeout: 20000 }
  ).toBeGreaterThan(1);

  console.log('PASS: Applicant names loaded');


  // =========================================
  // STEP 7: OPEN SORT DROPDOWN
  // =========================================

  // Verified Sort button locator
  const sortButton = page.locator(
    'button[aria-label="Dropdown"]'
  );

  await expect(sortButton).toBeVisible();

  await sortButton.click();

  // Verified Sort menu locator
  const sortMenu = page.locator(
    '[aria-labelledby="hs-dropdown-with-icons"]'
  );

  await expect(sortMenu).toBeVisible();

  console.log('PASS: Sorting dropdown opened');


  // =========================================
  // STEP 8: SELECT APPLICANT NAME (A-Z)
  // =========================================

  // Video CV sorting is intentionally excluded

  const sortAZ = sortMenu.getByText(
    'Applicant Name (A-Z)',
    { exact: true }
  );

  await expect(sortAZ).toBeVisible();

  await sortAZ.click();

  console.log('PASS: Applicant Name (A-Z) selected');


  // =========================================
  // STEP 9: WAIT FOR A-Z ORDER
  // =========================================

  // Read the currently displayed applicant names
  const getNames = async () => {
    return (await applicantNames.allTextContents())
      .map(name => name.trim())
      .filter(Boolean);
  };

  // Compare displayed order with alphabetical order
  const sortNames = names => [...names].sort(
    (a, b) => a.localeCompare(b, 'en', {
      sensitivity: 'base'
    })
  );

  // Poll until the UI finishes showing A-Z order
  await expect.poll(
    async () => {
      const names = await getNames();

      if (names.length < 2) return false;

      return JSON.stringify(names) ===
        JSON.stringify(sortNames(names));
    },
    {
      message: 'Applicant names did not become A-Z sorted',
      timeout: 20000
    }
  ).toBe(true);


  // =========================================
  // STEP 10: VERIFY ACTUAL VS EXPECTED
  // =========================================

  const actualNames = await getNames();

  const expectedNames = sortNames(actualNames);

  console.log('Actual Applicant Order:');
  console.log(actualNames);

  console.log('Expected A-Z Order:');
  console.log(expectedNames);

  // Verify all currently displayed applicants
  expect(actualNames.length).toBeGreaterThan(1);

  expect(
    actualNames,
    'FAIL: Applicant Name A-Z sorting is incorrect'
  ).toEqual(expectedNames);

  console.log('PASS: Applicant Name A-Z sorting is correct');
  console.log('Applicants checked:', actualNames.length);


  // =========================================
  // STEP 11: CAPTURE SCREENSHOT
  // =========================================

  await page.screenshot({
    path: 'test124-applicant-AZ-page1.png',
    fullPage: true
  });

  console.log('TEST 124 COMPLETED SUCCESSFULLY');

});

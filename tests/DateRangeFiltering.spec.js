
const { test, expect } = require('@playwright/test');

// ==============================================
// TEST 127 - BDJOBS DATE RANGE FILTERING
// ==============================================

test('Test 127 - Recruiter Date Range Filtering', async ({ page }) => {

  test.setTimeout(120000);

  // STEP 1: Login Credentials
  const username = 'Sadman_test';
  const password = '12345678';

  // STEP 2: Open Recruiter Website
  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'domcontentloaded'
  });

  // STEP 3: Login
  
  // STEP 3: Login
  const usernameBox = page.getByPlaceholder('Enter your username');
  const passwordBox = page.getByPlaceholder('Enter your password');

  await expect(usernameBox).toBeVisible();

  await usernameBox.fill(username);
  await passwordBox.fill(password);

  // Verify credentials were entered
  await expect(usernameBox).toHaveValue(username);
  await expect(passwordBox).toHaveValue(password);

  // Click Sign in
  await page.getByRole('button', {
    name: 'Sign in',
    exact: true
  }).click();

  console.log('Sign in button clicked');

  // STEP 4: Wait for Dashboard
  await expect(
    page.getByPlaceholder('Select date range')
  ).toBeVisible({ timeout: 30000 });

  await expect(page).toHaveURL(/\/dashboard/);

  console.log('PASS: Login successful');
  console.log('PASS: Dashboard opened');

/*
  // STEP 5: Published tab is selected by default
  // No need to click Published tab
  const publishedTab = page.getByText(
    /^Published\s*\(\d+\)$/
  ).first();

  await expect(publishedTab).toBeVisible();

  console.log('PASS: Published tab visible'); */



  // STEP 5: Dashboard loaded
// Published tab is already selected by default.
// No need to click Published tab.

// STEP 6: Directly open Date Range Picker
const dateFilter = page.getByPlaceholder('Select date range');

await expect(dateFilter).toBeVisible({
  timeout: 15000
});

await dateFilter.click();

// STEP 7: Verify Calendar opened
const calendar = page.locator('ngb-datepicker');

await expect(calendar).toBeVisible();

console.log('PASS: Date Range Picker opened');

  // STEP 8: Function to select July 2026
  async function selectJuly2026() {

    const yearDropdown = calendar.locator(
      'select[aria-label="Select year"]'
    );

    const monthDropdown = calendar.locator(
      'select[aria-label="Select month"]'
    );

    await yearDropdown.selectOption('2026');
    await monthDropdown.selectOption('7');

    await expect(yearDropdown).toHaveValue('2026');
    await expect(monthDropdown).toHaveValue('7');
  }

  await selectJuly2026();

  console.log('PASS: July 2026 selected');

  // STEP 9: Select Start Date - July 1
  await calendar.getByRole('gridcell', {
    name: 'Wednesday, July 1, 2026',
    exact: true
  }).click();

  console.log('PASS: Start Date selected');

  /*
  // STEP 10: Reopen calendar if necessary
  if (!(await calendar.isVisible())) {
    await dateFilter.click();
  }

  // Ensure July 2026 is selected
  await selectJuly2026();  */

  
  // STEP 10: Select End Date - July 31
  // Use only the visible calendar date

  const endDateCell = calendar.getByRole('gridcell', {
    name: 'Friday, July 31, 2026',
    exact: true
  }).filter({
    visible: true
  }).first();

  await expect(endDateCell).toBeVisible();

  await endDateCell.click();

  console.log('PASS: End Date selected');


  /*
  // STEP 11: Select End Date - July 31
  await calendar.getByRole('gridcell', {
    name: 'Friday, July 31, 2026',
    exact: true
  }).click(); */

  console.log('PASS: End Date selected');

  // STEP 12: Read selected date range
  const selectedRange = await dateFilter.inputValue();

  console.log('Selected Date Range:', selectedRange);

  expect(selectedRange.trim().length).toBeGreaterThan(0);

  // STEP 13: Verify Published Dates
  const startDate = Date.UTC(2026, 6, 1);
  const endDate = Date.UTC(2026, 6, 31);

  // Wait for filtered job dates
  await expect.poll(async () => {

    const pageText = await page.locator('body').innerText();

    const dateMatches = [
      ...pageText.matchAll(
        /Published On:\s*(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})/g
      )
    ];

    if (dateMatches.length === 0) {
      return false;
    }

    return dateMatches.every(match => {

      const day = Number(match[1]);
      const month = match[2];
      const year = Number(match[3]);

      const date = Date.parse(
        `${day} ${month} ${year} 00:00:00 GMT`
      );

      return (
        !Number.isNaN(date) &&
        date >= startDate &&
        date <= endDate
      );

    });

  }, {
    timeout: 20000,
    intervals: [500, 1000, 2000]
  }).toBe(true);

  // STEP 14: Print filtered published dates
  const pageText = await page.locator('body').innerText();

  const publishedDates = [
    ...pageText.matchAll(
      /Published On:\s*(\d{1,2}\s+[A-Za-z]{3}\s+\d{4})/g
    )
  ].map(match => match[1]);

  expect(publishedDates.length).toBeGreaterThan(0);

  console.log('Filtered Published Dates:', publishedDates);

  console.log(
    'PASS: All visible Published Dates are within July 2026'
  );

  // STEP 15: Take Screenshot
  await page.screenshot({
    path: 'date-range-filter-result.png',
    fullPage: true
  });

  console.log('PASS: TEST 127 COMPLETED');

});


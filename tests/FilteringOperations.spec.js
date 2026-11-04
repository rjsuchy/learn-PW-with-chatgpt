
const { test, expect } = require('@playwright/test');

// TEST 125 - Filter by Keyword

test('Filter products by keyword', async ({ page }) => {

  // STEP 1: Open website
  await page.goto('https://practiceautomatedtesting.com/shopping');

  // STEP 2: Find search box
  const searchBox = page.getByPlaceholder('Search for items');

  // STEP 3: Verify search box is visible
  await expect(searchBox).toBeVisible();

  // STEP 4: Enter keyword
  await searchBox.fill('Keyboard');

  // STEP 5: Verify matching product is displayed
  await expect(
    page.getByRole('heading', {
      name: 'Mechanical Keyboard',
      exact: true
    })
  ).toBeVisible();

  // STEP 6: Verify unrelated product is not displayed
  await expect(
    page.getByRole('heading', {
      name: 'Desk Lamp',
      exact: true
    })
  ).toHaveCount(0);

  console.log('PASS: Keyword filtering works correctly');

});



// ================================
// TEST 126 - PRICE FILTERING
// ================================

test('Filter products between $50 and $100', async ({ page }) => {

  await page.goto('https://practiceautomatedtesting.com/shopping');

  const sliders = page.locator('input[type="range"]');

  await expect(sliders).toHaveCount(2);

  // Set Minimum Price
  await sliders.nth(0).evaluate((slider) => {

    const setter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype, 'value'
    ).set;

    setter.call(slider, '50');

    slider.dispatchEvent(
      new Event('input', { bubbles: true })
    );

    slider.dispatchEvent(
      new Event('change', { bubbles: true })
    );

  });

  // Set Maximum Price
  await sliders.nth(1).evaluate((slider) => {

    const setter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype, 'value'
    ).set;

    setter.call(slider, '100');

    slider.dispatchEvent(
      new Event('input', { bubbles: true })
    );

    slider.dispatchEvent(
      new Event('change', { bubbles: true })
    );

  });

  await expect(
    page.getByRole('heading', { name: 'Bluetooth Headphones' })
  ).toBeVisible();

  await expect(
    page.getByRole('heading', { name: 'Mechanical Keyboard' })
  ).toBeVisible();

  console.log('PASS: Price filtering verified');

});

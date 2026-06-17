import { test, expect } from '@playwright/test';

test('Successful form submission', async ({ page }) => {

    // Open website
    await page.goto('https://demoqa.com/text-box');

    // Fill form fields
    await page.fill('#userName', 'Rifat Suchy');
    await page.fill('#userEmail', 'rifat@test.com');
    await page.fill('#currentAddress', 'Dhaka');

    // Click submit button
    await page.click('#submit');

    // Verify submitted output
    await expect(page.locator('#output')).toBeVisible();

    await expect(page.locator('#name'))
        .toContainText('Rifat Suchy');

    await expect(page.locator('#email'))
        .toContainText('rifat@test.com');
});

//2. Empty Form Validation

/*
import { test, expect } from '@playwright/test';

test('Validation for empty form', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box');

    // Click submit without input
    await page.click('#submit');

    // Output should not appear
    await expect(page.locator('#output'))
        .not.toBeVisible();
});
*/

//3. Invalid Email Validation
//Scenario:ভুল email দিলে field invalid হবে।
/*
import { test, expect } from '@playwright/test';

test('Invalid email validation', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box');

    // Enter invalid email
    await page.fill('#userEmail', 'abc123');

    // Click submit
    await page.click('#submit');

    // Verify invalid class exists
    await expect(page.locator('#userEmail'))
        .toHaveClass(/field-error/);
});
*/



//Real Project Validation Examples
//Required Field Validation
/*
test('Required field validation', async ({ page }) => {

    await page.goto('https://example.com/register');

    await page.click('button[type="submit"]');

    await expect(
        page.locator('.error-message')
    ).toContainText('This field is required');
});
*/
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Selenium Online Training' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Go To Registration' }).click();
  await page1.getByRole('textbox', { name: 'First Name (required)' }).click();
  await page1.getByRole('textbox', { name: 'First Name (required)' }).fill('Rifat');
  await page1.getByRole('textbox', { name: 'Last Name' }).click();
  await page1.getByRole('textbox', { name: 'Last Name' }).fill('Jahan');
  await page1.getByRole('textbox', { name: 'Email (required)' }).click();
  await page1.getByRole('textbox', { name: 'Email (required)' }).fill('asdf@gmail.com');
  await page1.getByRole('textbox', { name: 'Mobile (required)' }).click();
  await page1.getByRole('textbox', { name: 'Mobile (required)' }).fill('122336547');
  await page1.getByLabel('Country (required)').selectOption('7');
  await page1.getByRole('textbox', { name: 'City (required)' }).click();
  await page1.getByRole('textbox', { name: 'City (required)' }).fill('Dhaka');
  await page1.getByRole('textbox', { name: 'Your Message (required)' }).click();
  await page1.getByRole('textbox', { name: 'Your Message (required)' }).fill('test ');
  await page1.getByRole('textbox', { name: 'Input this code' }).click();
  await page1.getByRole('textbox', { name: 'Input this code' }).fill('hOeC');
  await page1.getByRole('button', { name: 'Send' }).click();
});
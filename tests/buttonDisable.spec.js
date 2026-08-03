import { test, expect } from '@playwright/test';

test('Verify disabled button cannot be clicked', async ({ page }) => {

  await page.goto('https://letcode.in/button');

  const disabledButton = page.getByRole('button', { name: 'Disabled' });

  // Verify button is disabled
  await expect(disabledButton).toBeDisabled();

  // Try to click the disabled button with a short timeout
  await expect(
    disabledButton.click({ timeout: 2000 })
  ).rejects.toThrow();

  /*  ~~ if said to try to click the disable bttn thn u can use this ~~
  
  try {
    await disabledButton.click({ timeout: 2000 });
   } catch (error) {
    console.log("Button is disabled and cannot be clicked.");
   }  */

});

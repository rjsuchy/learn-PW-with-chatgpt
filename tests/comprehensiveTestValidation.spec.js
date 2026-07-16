import { test, expect } from '@playwright/test';

test.describe("Complete E2E - SauceDemo Purchase Flow", () => {
  test('complete purchase with text validation', async ({ page }) => {  // Note: { page } is the correct syntax
    // Step 1: Login - FIXED URL
    await page.goto('https://www.saucedemo.com/');  // ✅ Added 'a' in sauce
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Validate login page
    await expect(page.locator('.login_logo')).toHaveText('Swag Labs');
    await expect(page.locator('#user-name')).toHaveAttribute('placeholder', 'Username');
    await expect(page.locator('#password')).toHaveAttribute('placeholder', 'Password');
    
    // Perform login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    
    // Step 2: Validate product page - Added wait
    await page.waitForSelector('.inventory_item', { timeout: 10000 });
    await expect(page.locator('.product_label')).toHaveText('Products');
    await expect(page.locator('.inventory_item')).toHaveCount(6);
    
    // Step 3: Add item to cart
    const productName = 'Sauce Labs Backpack';
    const productPrice = '$29.99';
    
    await expect(page.locator('.inventory_item_name').first()).toHaveText(productName);
    await expect(page.locator('.inventory_item_price').first()).toHaveText(productPrice);
    await page.click('#add-to-cart-sauce-labs-backpack');
    
    // Validate cart badge text
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    
    // Step 4: Go to cart
    await page.click('.shopping_cart_link');
    await expect(page.locator('.title')).toHaveText('Your Cart');
    await expect(page.locator('.inventory_item_name')).toHaveText(productName);
    await expect(page.locator('.inventory_item_price')).toHaveText(productPrice);
    
    // Step 5: Checkout
    await page.click('#checkout');
    await expect(page.locator('.title')).toHaveText('Checkout: Your Information');
    
    await page.fill('#first-name', 'John');
    await page.fill('#last-name', 'Doe');
    await page.fill('#postal-code', '12345');
    await page.click('#continue');
    
    // Step 6: Validate checkout overview
    await expect(page.locator('.title')).toHaveText('Checkout: Overview');
    await expect(page.locator('.inventory_item_name')).toHaveText(productName);
    await expect(page.locator('.inventory_item_price')).toHaveText(productPrice);
    
    const totalLabel = page.locator('.summary_total_label');
    await expect(totalLabel).toContainText('Total:');
    await expect(totalLabel).toContainText(productPrice);
    
    // Step 7: Finish purchase
    await page.click('#finish');
    await expect(page.locator('.title')).toHaveText('Checkout: Complete!');
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
    await expect(page.locator('.complete-text')).toContainText('Your order has been dispatched');
    await expect(page.locator('#back-to-products')).toHaveText('Back Home');
  });
});
import { test, expect } from '@playwright/test';

test('Validate tooltip', async ({ page }) => {

    // Open real Playwright practice website
    await page.goto('https://playwrightlab.github.io/');

    // Find the button that shows the tooltip
    const tooltipButton = page.getByRole('button', {
        name: 'Hover for tooltip'
    });

    // Hover over the button
    await tooltipButton.hover();

    // Find the tooltip text
    const tooltip = page.getByText(
        'This is a custom tooltip with HTML content!'
    );

    // Verify tooltip is visible
    await expect(tooltip).toBeVisible();

    // Verify tooltip text
    await expect(tooltip).toHaveText(
        'This is a custom tooltip with HTML content!'
    );

    // Print tooltip text
    console.log('Tooltip text:', await tooltip.innerText());
});
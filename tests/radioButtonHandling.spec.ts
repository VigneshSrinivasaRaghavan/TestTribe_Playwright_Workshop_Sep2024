import { test, expect } from '@playwright/test'

test('Radio button Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('//p[contains(text(),"Consent")]').click();
    const maleRadioButton = page.locator('input[value="Male"]');
    const femaleRadioButton = page.locator('input[value="FeMale"]');

    // Case 1 - Check default value selection
    await expect(maleRadioButton).not.toBeChecked();
    await expect(femaleRadioButton).not.toBeChecked();

    // Case 2 - Male selected
    await maleRadioButton.check();
    await expect(maleRadioButton).toBeChecked();
    await expect(femaleRadioButton).not.toBeChecked();

    // Case 3 - Female selcted
    await femaleRadioButton.check();
    await expect(maleRadioButton).not.toBeChecked();
    await expect(femaleRadioButton).toBeChecked();
});
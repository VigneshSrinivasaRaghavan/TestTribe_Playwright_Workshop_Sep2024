import { test, expect } from '@playwright/test'

test('Checkbox button Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('//p[contains(text(),"Consent")]').click();
    const checkbox1 = page.locator('#checkbox1');
    const checkbox2 = page.locator('#checkbox2');
    const checkbox3 = page.locator('#checkbox3');

    // Case 1 - Default
    await expect(checkbox1).not.toBeChecked();
    await expect(checkbox2).not.toBeChecked();
    await expect(checkbox3).not.toBeChecked();

    // Case 2 - Select Cricket, Movies
    await checkbox1.check();
    await checkbox2.check();
    await expect(checkbox1).toBeChecked();
    await expect(checkbox2).toBeChecked();
    await expect(checkbox3).not.toBeChecked();
});

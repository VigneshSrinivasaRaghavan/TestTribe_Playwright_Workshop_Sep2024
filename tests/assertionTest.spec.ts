import { test, expect } from '@playwright/test';

test('Visible/Hidden', async ({ page }) => {
    await page.goto("https://www.letskodeit.com/practice");
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.locator('#show-textbox').click();
    await expect(page.locator('#displayed-text')).toBeVisible();
});

test('Present/NotPresent', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
    await expect(page.locator('//button[normalize-space()="Delete"]')).toHaveCount(0);
    await page.locator('button[onclick="addElement()"]').click();
    await expect(page.locator('//button[normalize-space()="Delete"]')).toHaveCount(1);
    await page.locator('button[onclick="addElement()"]').click();
    await page.locator('button[onclick="addElement()"]').click();
    await expect(page.locator('//button[normalize-space()="Delete"]')).toHaveCount(3);
    await page.locator('(//button[normalize-space()="Delete"])[1]').click();
    await expect(page.locator('//button[normalize-space()="Delete"]')).toHaveCount(2);
});

test('Enabled/Disabled', async ({ page }) => {
    await page.goto("https://letcode.in/buttons");
    await expect(page.locator('#home')).toBeEnabled();
    await expect(page.locator('(//button[@id="isDisabled"])[1]')).toBeDisabled();
});

test('Text Match and mismatch', async ({ page }) => {
    await page.goto("https://letcode.in/buttons");
    await expect(page.locator('#home')).toHaveText('Goto Home');
    await expect(page.locator('#home')).not.toHaveText('Vignesh');
});

test('Element Attributes', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await expect(page.locator('#home')).toHaveAttribute('id','home');
    await expect(page.locator('#home')).toHaveAttribute('routerlink','/');
});


test('URL and Title', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    expect(await page.title()).toEqual('OrangeHRM');
    expect(page.url()).toEqual('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
});

test('Screenshot', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.locator('input[name="username"]').fill('Vignesh');
    await expect(page).toHaveScreenshot();
});

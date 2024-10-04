import {expect, test} from '@playwright/test'

test.beforeEach('OrangeHRM Login',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
})

test.afterEach('After Each Hook', async ({page}) => {
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('a[href="/auth/logout"]').click();
})

test('Test 1', async ({ page }) => {
    await page.locator('a[href="/admin/viewAdminModule"]').click();
    await page.waitForTimeout(5000);
})

test('Test 2', async ({ page }) => {
    await page.locator('a[href="/pim/viewPimModule"]').click();
    await page.waitForTimeout(5000);
})

import { test, expect } from '@playwright/test';
import * as orangeHrmData from './testData/orangeHRMCredentials.json'

test('Login test with valid Credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.locator('input[name="username"]').fill(orangeHrmData.validUsername);
  await page.locator('input[name="password"]').fill(orangeHrmData.validPassword);
  await page.locator('button[type="submit"]').click();
  await expect(page.locator('.oxd-topbar-header')).toBeVisible();
});

test('Login test with invalid Credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.locator('input[name="username"]').fill(orangeHrmData.invalidUsername);
  await page.locator('input[name="password"]').fill(orangeHrmData.invalidPassword);
  await page.locator('button[type="submit"]').click();
  await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials');
});
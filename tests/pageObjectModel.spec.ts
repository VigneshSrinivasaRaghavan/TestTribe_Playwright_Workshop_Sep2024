import { test, expect } from '@playwright/test';
import * as orangeHrmData from './testData/orangeHRMCredentials.json'
import { LoginPage } from './pages/loginPage';

test('Login test with valid Credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  let loginPage = new LoginPage(page);
  await loginPage.enterUsername(orangeHrmData.validUsername);
  await loginPage.enterPassword(orangeHrmData.validPassword);
  await loginPage.clickLogin();
  await expect(page.locator('.oxd-topbar-header')).toBeVisible();
});
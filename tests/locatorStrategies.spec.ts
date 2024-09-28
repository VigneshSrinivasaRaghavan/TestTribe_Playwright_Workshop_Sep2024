/*
ID -- 1st priority. ALWAYS UNIQUE
NAME -- 2nd priority
DATA TEST ID, PLACEHOLDER, TYPE
CLASS -- Last priority
*/

// Syntax for CSS ---> tagName[attribute="value"]
// Syntax for Xpath ---> //tagName[@attribute="value"]
// Syntax for ID Attribute in CSS --> #value
// Syntax for Class Attribute in CSS --> .value

import { test, expect } from '@playwright/test';

test('Locator Strategy', async ({ page }) => {
await page.goto("https://www.saucedemo.com/");
await page.locator('#user-name').fill('standard_user');
await page.locator('//input[@id="password"]').fill('secret_sauce');
await page.locator('input[value="Login"]').click();
await page.waitForTimeout(5000);
});
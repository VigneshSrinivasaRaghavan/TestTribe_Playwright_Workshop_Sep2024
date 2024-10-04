import { test, expect } from '@playwright/test';

test('Single Tab Handling', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await page.locator('//p[contains(text(),"Consent")]').click();
  const [newTab] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('button:has-text("click")')
  ]);
  await newTab.waitForLoadState('load');
  await newTab.locator('a[href="/downloads"]').click();
  await newTab.waitForTimeout(5000);
  await newTab.close();
})

test('Single Window Handling', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await page.locator('//p[contains(text(),"Consent")]').click();
  await page.locator('a[href="#Seperate"]').click();

  const [newWindow] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('button[onclick="newwindow()"]')
  ]);
  await newWindow.waitForLoadState('load');
  await newWindow.locator('a[href="/downloads"]').click();
  await newWindow.waitForTimeout(5000);
  await newWindow.close();
})

test('Multiple Tab Handling', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await page.locator('//p[contains(text(),"Consent")]').click();
  await page.locator('a[href="#Multiple"]').click();
  const [multipleTab] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('button[onclick="multiwindow()"]')
  ]);
  await multipleTab.waitForLoadState('load');
  const pages = multipleTab.context().pages();
  await pages[1].waitForLoadState('load');
  await pages[1].bringToFront();
  await pages[1].locator('#email').fill('Vignesh');

  await pages[2].waitForLoadState('load');
  await pages[2].bringToFront();
  await pages[2].locator('a[href="/downloads"]').click();

  await pages[1].close();
  await pages[2].close();
})


/*
ASSIGNMENT
test('Multiple Window Handling', async ({ page }) => {
  Handling of Multiple window is exactly same as handling multiple tab
  For practice go to this website -> https://www.hyrtutorials.com/p/window-handles-practice.html
})
*/
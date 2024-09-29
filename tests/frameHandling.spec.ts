import { test, expect } from '@playwright/test';

test('Issue with Frame', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  await page.locator('input[name="mytext1"]').fill('Playwright');
  await page.waitForTimeout(10000);
})

test('Frame Handling Using Page.Frame()', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  // const allFrames = page.frames();
  // const frame1 = page.frame('<NAME VALUE>');
 const frame1 = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
 await frame1?.locator('input[name="mytext1"]').fill('Playwright');
 await page.waitForTimeout(10000);
})

test('Frame Handling Using Page.FrameLocator()', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  const frame1 = page.frameLocator('frame[src="frame_1.html"]');
 await frame1?.locator('input[name="mytext1"]').fill('Playwright');
 await page.waitForTimeout(10000);
})

test('Nested Frame Handling', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  const frame3 = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});
  const childFrames = frame3?.childFrames();
  await childFrames[0].locator('#i19').click();
  await page.waitForTimeout(10000);
})

import { test, expect } from '@playwright/test';
import { DateTime } from 'luxon';

test('Using Fill Method', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
  await page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
  await page.locator('#birthday').fill('1993-10-18');
  await page.waitForTimeout(5000);
});

test.only('Using Luxon', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
  await page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
  await page.pause();
  
  await selectDate(18,"October 2023");

  await page.reload();

  await selectDate(18,"October 2025");

  await page.reload();

  await selectDate(18,"September 2024");

  async function selectDate(date:number, monthYearText:string){
    await page.locator('input[placeholder="Start date"]').click();
    const prevButton = page.locator('div[class="datepicker-days"] th[class="prev"]');
    const nextButton = page.locator('div[class="datepicker-days"] th[class="next"]');
    const monthYear = page.locator('div[class="datepicker-days"] th[class="datepicker-switch"]');
  
    /*
    Complete Month  - October --> MMMM
    Short Month - Oct --> MMM
    Complete Year  - 2024 --> yyyy
    Short Year - 24 --> yy
    */
  
    const formattedDate = DateTime.fromFormat(monthYearText, "MMMM yyyy")
  
    while (await monthYear.textContent() != monthYearText) {
  
      if (formattedDate < DateTime.fromJSDate(new Date())) {
        await prevButton.click();
      }
      else {
        await nextButton.click();
      }
    }
  
    await page.locator('td[class="day"]',{hasText:`${date}`}).click();
    await page.waitForTimeout(5000);
  }
});


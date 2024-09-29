import { test, expect } from '@playwright/test'

test('Single Static DropDown Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('//p[contains(text(),"Consent")]').click();

    await page.selectOption('#Skills',{
        value:'Certifications'
    });

    await page.selectOption('#Skills',{
        label:'Android'
    });

    await page.selectOption('#Skills',{
        index:7
    });
});

test('Multi Static DropDown Handling', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    await page.selectOption('#multi-select',[
        {value:"California"},
        {label:"Florida"},
        {index:3}
    ]);
    await page.waitForTimeout(5000);
});

test('Searchable Dynamic DropDown', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('//p[contains(text(),"Consent")]').click();
    await page.locator('span[role="combobox"]').click();
    await page.locator('input[type="search"]').fill('India');
    await page.locator('#select2-country-results>li').click();
    await page.waitForTimeout(7000);
});

test('Non Searchable Dynamic DropDown', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('//p[contains(text(),"Consent")]').click();
    await page.locator('span[role="combobox"]').click();
    await page.locator('#select2-country-results>li',{hasText:"Japan"}).click();
    await page.waitForTimeout(7000);
});

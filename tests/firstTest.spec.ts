import {test, expect} from '@playwright/test';

test('My First Playwright test', async({page})=>{
     await page.goto("https://google.com");
    expect(await page.title()).toEqual('Google');
});

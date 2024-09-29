import {test} from '@playwright/test'

test('Fill Method',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('input[name="username"]').fill('Admin');
})

test('Press - Sequentially method',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.pause();
    await page.locator('input[name="username"]').pressSequentially('Admin');
    await page.pause();
})

test.only('Press - Sequentially method with Delay',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.pause();
    await page.locator('input[name="username"]').pressSequentially('Admin',{delay:1000});
    await page.pause();
})
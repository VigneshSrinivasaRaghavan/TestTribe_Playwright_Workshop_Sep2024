import {expect, test} from '@playwright/test'

const credentials = [
    {
        "username": "Admin",
        "password": "admin123"
    },
    {
        "username": "Admin123",
        "password": "admin"
    }
]

credentials.forEach(data =>{
    test(`Orange HRM Login with ${data.username} -- ${data.password}`, async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/');
        await page.locator('input[name="username"]').fill(data.username);
        await page.locator('input[name="password"]').fill(data.password);
        await page.locator('button[type="submit"]').click();
        await page.waitForTimeout(10000);
    })
})

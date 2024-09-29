import { test, expect } from '@playwright/test'

test('Simple Alert Handling', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog',async(alert) =>{
        expect(alert.message()).toEqual('I am a JS Alert');
        alert.accept();
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
    })
    await page.locator('button[onclick="jsAlert()"]').click();
});

test('Confirm Alert - Ok Button', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog',async(alert) =>{
        expect(alert.message()).toEqual('I am a JS Confirm');
        alert.accept();
        await expect(page.locator('#result')).toHaveText('You clicked: Ok')
    })
    await page.locator('button[onclick="jsConfirm()"]').click();
});

// Assignment
// test('Confirm Alert - Cancel Button', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
// });

test.only('Prompt Alert - Ok Button', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog',async(alert) =>{
        expect(alert.message()).toEqual('I am a JS prompt');
        alert.accept('Vignesh');
        await expect(page.locator('#result')).toHaveText('You entered: Vignesh');
    })
    await page.locator('button[onclick="jsPrompt()"]').click();
});

// Assignment
// test('Prompt Alert - Cancel Button', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
// });
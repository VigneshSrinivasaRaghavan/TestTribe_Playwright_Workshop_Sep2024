import {test,expect} from '@playwright/test'

test('Google Test',async ({page,context}) => {
    await context.tracing.start({snapshots:true,screenshots:true});
    await page.goto("https://google.com");
    expect(await page.title()).toEqual('Amazon');
    await context.tracing.stop({path:'tracingProgramattic.zip'});
})
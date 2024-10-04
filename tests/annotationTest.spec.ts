import {test} from '@playwright/test'

test.skip('Skipped test', async()=>{
console.log('I am a skipped test');
})

test('Skip in Webkit', async({page, browserName})=>{
    test.skip(browserName=='webkit',"This feature is not yet developerd in Safari");
    console.log('I am a skipped condition test');
})

test.fail('Not yet Ready test', async()=>{
    test.fail();
})

test('Fail in Webkit', async({page, browserName})=>{
    test.fail(browserName=='webkit',"This feature is will fail in Safari");
})

test.fixme('Fix me Test', async()=>{
    console.log('Fix me test');
})

test('Slow Test', async()=>{
    test.slow();
    console.log('Slow test');
})

test('Slow Test with Condition', async({browserName})=>{
    test.slow(browserName=='webkit',"This feature is will run slow in Safari");
    console.log('Slow test');
})

// test.only('Only Test', async()=>{
//     console.log('Only Test');
// })
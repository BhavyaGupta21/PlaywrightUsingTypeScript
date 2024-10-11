// 1. Skip - Unconditionally skip a test. Test is immediately aborted when you call test.skip()
// 2. Skip with condition - Conditionally skip a test with an optional description
// 3. Fail - Unconditionally marks a test as "should fail"
// 4. Fail with Condition - Conditionally mark a test as "should fail" with an  optional description
// 5. Fix me - Declares a test to be fixed. This test will not execute.
// 6. Slow - Unconditionally marks a test as "slow". Slow test will be given triple default timeout
// 7. Slow with Condition - Conditionally mark a test as "slow" with an optional description
// 8. Only - Declares a focused test

import {test} from '@playwright/test'

test.skip('Skipped test', async()=> {
    console.log('I am a skipped test');
})

test('Skipped in Webkit', async({page, browserName})=> {
    test.skip(browserName=== 'webkit', 'This feature is not implemented for Mac');
    console.log('I am a skip with condition test');

})

test('Not yet ready test', async()=> {
    test.fail();
})

test('Fail in Webkit', async({page, browserName})=> {
    test.fail(browserName === 'webkit', 'This feature is not implemented for Mac');
    console.log('I am fail with condition test');
})


test.fixme('Fix me test', async()=> {
    console.log('I am a Fix me test');
})

test('Slow test', async()=> {
    console.log('I am a slow test');
    test.slow();
})

test('Slow test with condition', async({browserName})=> {
    test.slow(browserName === 'webkit', 'This feature is not implemented for Mac');
})

test.only('Only Test', async()=> {
    console.log('I am Only Test');
})


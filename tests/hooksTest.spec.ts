import {test, expect} from '@playwright/test'

test.beforeAll(async()=> {
    console.log("Before All Hook");
})

test.beforeEach(async()=> {
    console.log("Before Each Hook");
})

test('Test 1', async({page})=> {
    console.log('Test 1 block');
})
test('Test 2', async({page})=> {
    console.log('Test 2 block');
})
test('Test 3', async({page})=> {
    console.log('Test 3 block');
})

test.afterEach(async()=> {
    console.log("After Each Hook");
})

test.afterAll(async()=> {
    console.log("After All Hook");
})
import {test,expect} from '@playwright/test'
import * as orangeHRMData from './testData/orangeHRMCredentials.json'

test('Login with valid credentials', async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await page.locator('input[placeholder="Username"]').fill(orangeHRMData.validUsername);
    await page.locator('input[placeholder="Password"]').fill(orangeHRMData.validPassword);
    await page.locator('button[type="submit"]').click();
    
    // Logout
    await page.locator('.oxd-userdropdown-name').click();
    await page.locator('//a[normalize-space()="Logout"]').click(); 
})

test('Login with invalid credentials', async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await page.locator('input[placeholder="Username"]').fill(orangeHRMData.invalidUsername);
    await page.locator('input[placeholder="Password"]').fill(orangeHRMData.invalidPassword);
    await page.locator('button[type="submit"]').click();
    
    await expect(page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text')).toBeVisible();
})
import {test,expect} from '@playwright/test'
import fs from 'fs'
import path from 'path'
import {parse} from 'csv-parse/sync'

const orangeHRMData = parse(fs.readFileSync(path.join(__dirname, 'testData', 'orangeHRMCreds.csv')), {
    columns: true,
    skip_empty_lines: true
})

test('Login with valid credentials', async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await page.locator('input[placeholder="Username"]').fill(orangeHRMData[0].username);
    await page.locator('input[placeholder="Password"]').fill(orangeHRMData[0].password);
    await page.locator('button[type="submit"]').click();
    
    // Logout
    await page.locator('.oxd-userdropdown-name').click();
    await page.locator('//a[normalize-space()="Logout"]').click(); 
})

test('Login with invalid credentials', async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await page.locator('input[placeholder="Username"]').fill(orangeHRMData[1].username);
    await page.locator('input[placeholder="Password"]').fill(orangeHRMData[1].password);
    await page.locator('button[type="submit"]').click();
    
    await expect(page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text')).toBeVisible();
})
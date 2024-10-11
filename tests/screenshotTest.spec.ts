import {test} from '@playwright/test'

test('Loging Test for Orange HRM', async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    
    // Login
    await page.locator('input[placeholder="Username"]').fill('Admin');
    await page.locator('input[placeholder="Password"]').fill('admin123');
    //await page.screenshot({path:'tests/screenshots' + 'LoginPage.png'});
    await page.locator('button[type="submit"]').click();

    // Logout
    await page.locator('.oxd-userdropdown-name').click();
    //await page.screenshot({path:'tests/screenshots' + 'HomePage.png'});
    await page.locator('//a[normalize-space()="Logout"]').click();

    await page.close();
})
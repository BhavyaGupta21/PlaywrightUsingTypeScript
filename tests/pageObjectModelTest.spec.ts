import { test, expect } from '@playwright/test'
import {HomePage} from '../tests/pages/homePage'
import {SignInPage} from '../tests/pages/signInPage'

test('Login Conduit test using POM', async ({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    const homePage = new HomePage(page);
    const signInPage = new SignInPage(page);

    await signInPage.enterUsername("Admin");
    await signInPage.enterPassword("admin123");
    await signInPage.clickSignInBtn();

    await homePage.clickAccountBtn();
    await homePage.clickLogoutBtn();

    await page.close();
})
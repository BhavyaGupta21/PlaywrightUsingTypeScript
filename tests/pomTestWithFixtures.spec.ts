import { test, expect } from '../fixtures/pomFixtures'

test('Login Conduit test using POM', async ({page, signInPage, homePage})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await signInPage.enterUsername("Admin");
    await signInPage.enterPassword("admin123");
    await signInPage.clickSignInBtn();

    await homePage.clickAccountBtn();
    await homePage.clickLogoutBtn();

    await page.close();
})
import {test, expect} from '@playwright/test';

test ('My First Test', async({page}) => {
    await page.goto('https://www.google.com');

    // Expect a title
    await expect(page).toHaveTitle('Google');
});
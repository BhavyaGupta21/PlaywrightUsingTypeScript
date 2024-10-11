import {test, expect} from '@playwright/test'

test('Single Tab Handling', async({page})=> {
    await page.goto('https://demo.automationtesting.in/Windows.html');

    const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button:has-text("click")')
    ])

    await newTab.waitForLoadState();

    newTab.locator('//span[normalize-space()="Blog"]').click();
    newTab.locator('a[id="m-blog2023"] span').click();

    await newTab.waitForTimeout(5000);

    await newTab.close();
})

test('Single Window Handling', async({page})=> {
    await page.goto('https://demo.automationtesting.in/Windows.html');

    await page.locator('.analystic[href="#Seperate"]').click();

    const [newWindow] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('.btn.btn-primary')
    ])

    await newWindow.waitForLoadState();

    newWindow.locator('//span[normalize-space()="Blog"]').click();
    newWindow.locator('a[id="m-blog2023"] span').click();

    await newWindow.waitForTimeout(5000);

    await newWindow.close();

    await page.close();
})

test.only('Multiple Tab Handling', async({page})=> {
    await page.goto('https://demo.automationtesting.in/Windows.html');

    await page.locator('.analystic[href="#Multiple"]').click();

    const [multipleTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button[onclick="multiwindow()"]')
    ])

    await multipleTab.waitForLoadState();

    const pages = multipleTab.context().pages();
    console.log("Total pages open: " + pages.length);

    await pages[1].locator('#email').fill('playwright@gmail.com');
    await multipleTab.waitForTimeout(5000);

    // await pages[2].locator('//span[normalize-space()="Blog"]').click();
    // await pages[2].locator('a[id="m-blog2023"] span').click();
    // await multipleTab.waitForTimeout(5000);

    await pages[1].close();
    // await pages[2].close();
})
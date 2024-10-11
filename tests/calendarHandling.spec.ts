import {test, expect} from '@playwright/test'
import {DateTime} from 'luxon'

test('Using Fill Method', async({page})=> {
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');

    let date = '1993-10-18';

    await page.locator('#birthday').fill(date);

    await page.pause();
    await page.close();
})

test('Using luxon', async({page})=> {
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');

    // Select Past Date
    await page.locator('input[placeholder="Start date"]').click();
    selectDate(20, "June 2019", page);
    await page.waitForTimeout(5000);

    await page.reload();

    // Select Future Date
    await page.locator('input[placeholder="Start date"]').click();
    selectDate(20, "June 2025", page);
    await page.waitForTimeout(5000);

    await page.reload();

    // Select Current Month Date
    await page.locator('input[placeholder="Start date"]').click();
    selectDate(10, "October 2024", page);
    await page.waitForTimeout(5000);

    await page.reload();

    await page.pause();
})

async function selectDate(date: Number, dateToSelect: String, page) {
    const monthYear = page.locator('div[class="datepicker-days"] th[class="datepicker-switch"]');
    const prevBtn = page.locator('div[class="datepicker-days"] th[class="prev"]');
    const nxtBtn = page.locator('div[class="datepicker-days"] th[class="next"]');

    //let dateToSelect = "October 1993";
    const formattedMonth = DateTime.fromFormat(dateToSelect, "MMMM yyyy");

    while(await monthYear.textContent() != dateToSelect) {
        if (formattedMonth < DateTime.fromJSDate(new Date())) {
            await prevBtn.click();
        } else {
            await nxtBtn.click();
        }
    }

    await page.locator(`//td[@class="day"] [text()="${date}"]`).click();
}


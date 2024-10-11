import {test, expect} from '@playwright/test'

test('Checkbox button handling', async({page})=> {
    await page.goto('https://demo.automationtesting.in/Register.html');

    const cricketCheckbox = page.locator('#checkbox1');
    const movieCheckbox = page.locator('#checkbox2');
    const hockeyCheckbox = page.locator('#checkbox3');

    // Way 1 Assertion
    expect (cricketCheckbox).not.toBeChecked();
    expect (movieCheckbox).not.toBeChecked();
    expect (hockeyCheckbox).not.toBeChecked();

    // Way 2 Assertion
    expect(await cricketCheckbox.isChecked()).toBeFalsy();
    expect(await movieCheckbox.isChecked()).toBeFalsy();
    expect(await hockeyCheckbox.isChecked()).toBeFalsy();

    await cricketCheckbox.check();
    await movieCheckbox.check();
    await hockeyCheckbox.check();

    expect (cricketCheckbox).toBeChecked();
    expect (movieCheckbox).toBeChecked();
    expect(await hockeyCheckbox.isChecked()).toBeTruthy();


    await page.close();
})
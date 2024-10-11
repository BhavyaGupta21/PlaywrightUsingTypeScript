import { test, expect } from '@playwright/test'
import { match } from 'assert';

test('Handling Webtable', async({ page })=> {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('table[name="BookTable"]');

    // Total Rows and Columns
    const  columns = table.locator('tr th');
    console.log("Number of columns: ", await columns.count());

    const rows = table.locator('tbody tr');
    console.log("Number of rows: ", await rows.count());

    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(7);

    await page.close();
})

test('Selecting Single Checkbox in the Table', async({ page })=> {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');

    const columns = table.locator('thead tr th');
    const rows = table.locator('tbody tr');

    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    })
    await matchedRow.locator('input').check();

    await page.pause();

    await page.close();
})

test('Selecting Multiple Checkbox using function', async({ page })=> {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');

    const columns = table.locator('thead tr th');
    const rows = table.locator('tbody tr');

    await selectProduct(rows, page, 'Laptop');
    await selectProduct(rows, page, 'Tablet');
    await selectProduct(rows, page, 'Wireless Earbuds');

    await page.close();
})

async function selectProduct(rows, page, productName) {
    const matchedRow = rows.filter({
        has:page.locator('td'),
        hasText: productName
    })
    await matchedRow.locator('input').check();
}

test('Printing all items from Page 1 in Pagination Table', async({ page })=> {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('#productTable');
    const columns = table.locator('thead tr th');
    const rows = table.locator('tbody tr');
    
    for(let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const rowData = row.locator('td');
        for(let j = 0; j < await rowData.count(); j++) {
            const cellData = await rowData.nth(j).textContent();
            console.log(cellData);
        }
    }

    await page.close();
})

test.only('Printing all items from all pages in Pagination Table', async({ page })=> {
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    const table = page.locator('#productTable');
    const columns = table.locator('thead tr th');
    const rows = table.locator('tbody tr');

    const pages = page.locator('#pagination li a');
    const totalPages = await pages.count();
    console.log('Total number of pages: ' + totalPages);

    for(let p = 0; p < totalPages; p++) {
        if(p > 0) {
            await pages.nth(p).click();
        }
        for(let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const rowData = row.locator('td');
            for(let j = 0; j < await rowData.count(); j++) {
                const cellData = await rowData.nth(j).textContent();
                console.log(cellData);
            }
        }
    }

    

    await page.close();
})


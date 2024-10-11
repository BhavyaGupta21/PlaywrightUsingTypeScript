import {test, expect} from '@playwright/test'

test('Upload multiple Files - Approach 1', async ({page})=> {
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');

    const uploadFile = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('input[name="files[]"]').click()
    ])

    await uploadFile[0].setFiles(['filesToUpload/Playwright image 1.jpg', 'filesToUpload/Playwright image 2.png']);

    await page.waitForTimeout(5000);

    await page.close();
})

test('Upload multiple Files - Approach 2', async ({page})=> {
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');

    await page.setInputFiles('input[name="files[]"]', ['filesToUpload/Playwright image 1.jpg', 'filesToUpload/Playwright image 2.png']);
    await page.waitForTimeout(5000);

    await page.close();
})
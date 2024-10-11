import { test, expect } from '@playwright/test'

test('Frame Handling Using Page.Frame()', async({page})=> {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // To find total number of frames
    const allFrames = page.frames();
    const allFramesCount = allFrames.length;
    console.log('Total Frames count: ' + allFramesCount);

    const frame1 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1?.locator('input[name="mytext1"]').fill('Playwright');

    await page.waitForTimeout(5000);

    await page.close();
})

test('Frame Handling Using Page.FrameLocator()', async({page})=> {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame1 = page.frameLocator('frame[src="frame_1.html"]');
    await frame1?.locator('input[name="mytext1"]').fill('Playwright');

    await page.waitForTimeout(5000);

    await page.close();
})

test.only('Nested Frame Handling', async({page})=> {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    const childFrame = frame3?.childFrames();
    console.log('Number of child frames: ' + childFrame?.length);

    await childFrame[0].locator('//*[@id="i8"]').check({force: true});
    await childFrame[0].locator('//*[@id="i19"]').check({force: true});

    await page.waitForTimeout(5000);

    await page.close();
})
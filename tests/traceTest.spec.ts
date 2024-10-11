import { test, expect } from '@playwright/test';

test('test', async ({ page, context }) => {
  await context.tracing.start({snapshots:true, screenshots: true});
  
  await page.goto('https://react-redux.realworld.io/#/?_k=llhaq3');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('playwrightdemo@gmail.com');
  await page.getByPlaceholder('Email').press('Tab');
  await page.getByPlaceholder('Password').fill('playwrightdemo');
  await page.getByPlaceholder('Password').press('Enter');
  await page.getByRole('link', { name: 'Global Feed' }).click();
  await page.getByRole('link', { name: '  Settings' }).click();
  await page.getByRole('button', { name: 'Or click here to logout.' }).click();

  await context.tracing.stop({path:'traceTest.zip'})
});
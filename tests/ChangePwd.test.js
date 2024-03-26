/* eslint-disable prettier/prettier */

// import { test } from '@playwright/test';

const { test } = require('playwright/test');

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});
 
test.afterAll(async () => {
  await page.close();
});
 
const ChangePwdPage  = require('../playwright/pages/ChangePwdPage');

// eslint-disable-next-line import/no-unresolved
 
// This below test for changing existing pwd

// eslint-disable-next-line no-empty-pattern
test('ChangePassword test', async ({}, testInfo) => {
    
    // eslint-disable-next-line prettier/prettier
     
    const changePwdPage = new ChangePwdPage(page);
    await changePwdPage.ChangePwd();
    const screenshot = await page.screenshot();
    await testInfo.attach('ChangePassword test screenshot', { body: screenshot, contentType: 'image/png' });
});
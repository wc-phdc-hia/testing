/* eslint-disable prettier/prettier */
//import { test } from '@playwright/test';
const { test } = require('playwright/test');
let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});
 
test.afterAll(async () => {
  await page.close();
});
 
const LoginAfterResetPwdPage  = require('../playwright/pages/LoginAfterResetPwdPage');
// eslint-disable-next-line import/no-unresolved
 
// This below test for changing existing pwd

test('LoginAfterResetPwd test', async ({}, testInfo) => {
    
    // eslint-disable-next-line prettier/prettier
     
    const loginAfterResetPwdPage = new LoginAfterResetPwdPage(page);
    await loginAfterResetPwdPage.LoginAfterResetPwd();
    const screenshot = await page.screenshot();
    await testInfo.attach('LoginAfterResetPwd test screenshot', { body: screenshot, contentType: 'image/png' });
});
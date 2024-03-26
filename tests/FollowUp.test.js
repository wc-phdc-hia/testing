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
 
const FollowUpPage  = require('../playwright/pages/FollowUpPage');
// eslint-disable-next-line import/no-unresolved
 
// This below test for Navigation to Followup page and checking basic functionality

// eslint-disable-next-line no-empty-pattern
test('followUp test', async ({}, testInfo) => {
    
    // eslint-disable-next-line prettier/prettier
     
    const followUpPage = new FollowUpPage(page);
    await followUpPage.gotoFollowUpPage();
    const screenshot = await page.screenshot();
    await testInfo.attach('followUp test screenshot', { body: screenshot, contentType: 'image/png' });
});
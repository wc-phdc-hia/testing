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
 
const LabsPage  = require('../playwright/pages/LabsPage');
// eslint-disable-next-line import/no-unresolved
 
// This below test for Navigation to labs page and checking basic functionality

// eslint-disable-next-line no-empty-pattern
test('labs test', async ({}, testInfo) => {

    
    // eslint-disable-next-line prettier/prettier
     
    const labsPage = new LabsPage(page);
    await labsPage.gotoLabsPage();
    const screenshot = await page.screenshot();
    await testInfo.attach('Medicines test screenshot', { body: screenshot, contentType: 'image/png' }); 
});
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
 
const MedicinesPage  = require('../playwright/pages/MedicinesPage');
// eslint-disable-next-line import/no-unresolved
 
// This below test for Navigation to Medicines page and checking basic functionality

test('Medicines test', async ({}, testInfo) => {
    
    // eslint-disable-next-line prettier/prettier
     
    const medicinesPage = new MedicinesPage(page);
    await medicinesPage.gotoMedicinesPage();
    const screenshot = await page.screenshot();
    await testInfo.attach('Medicines test screenshot', { body: screenshot, contentType: 'image/png' });
});

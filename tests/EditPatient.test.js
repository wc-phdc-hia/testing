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
 
const EditPatientPage  = require('../playwright/pages/EditPatientPage');

// eslint-disable-next-line import/no-unresolved

// This below test for adding new user

test('EditPatient test', async ({}, testInfo) => {
     
    // eslint-disable-next-line prettier/prettier
     
    const editPatientPage = new EditPatientPage(page);
    await editPatientPage.EditPatient();
    await editPatientPage.EditPatientViaPatientAdmin();
    const screenshot = await page.screenshot();
    await testInfo.attach('EditPatient test screenshot', { body: screenshot, contentType: 'image/png' });
});
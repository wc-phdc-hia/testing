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
 
const DeletePatientViaPatientAdminPage  = require('../playwright/pages/DeletePatientViaPatientAdminPage');

// eslint-disable-next-line import/no-unresolved

// This below test for adding new user

test('DeletePatientViaPatient test', async ({}, testInfo) => {
     
    // eslint-disable-next-line prettier/prettier
     
    const deletePatientViaPatientAdminPage = new DeletePatientViaPatientAdminPage(page);
    await deletePatientViaPatientAdminPage.DeletePatientViaPatientAdmin();
    const screenshot = await page.screenshot();
    await testInfo.attach('DeletePatientViaPatient test screenshot', { body: screenshot, contentType: 'image/png' });
});
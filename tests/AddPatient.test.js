/* eslint-disable prettier/prettier */
 
const { test } = require('playwright/test');

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});
 
test.afterAll(async () => {
  await page.close();
});
 
const AddNewPatientPage  = require('../playwright/pages/AddNewPatientPage');
// eslint-disable-next-line import/no-unresolved

// This below test for adding new user

// eslint-disable-next-line no-empty-pattern
test('AddNewPatient test', async ({}, testInfo) => {
     
    // eslint-disable-next-line prettier/prettier
     
    const addNewPatientPage = new AddNewPatientPage(page);
    await addNewPatientPage.AddPatient();
    const screenshot = await page.screenshot();
    await testInfo.attach('AddNewPatient test screenshot', { body: screenshot, contentType: 'image/png' });
});
/* eslint-disable prettier/prettier */
 
const { test } = require('playwright/test');

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});
 
test.afterAll(async () => {
  await page.close();
});
 
const AddPatientAttachmentPage  = require('../playwright/pages/AddPatientAttachmentPage');

// eslint-disable-next-line import/no-unresolved

 // eslint-disable-next-line no-empty-pattern
test('AddPatientAttachment test', async () => {
    // ChangePwd page

    // eslint-disable-next-line prettier/prettier
     
    const addPatientAttachmentPage = new AddPatientAttachmentPage(page);
    await addPatientAttachmentPage.AddPatientAttachment();
});
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
 
const EditUserPage  = require('../playwright/pages/EditUserPage');


// eslint-disable-next-line import/no-unresolved
 
// This below test for Editing existing user

// eslint-disable-next-line no-empty-pattern
test('EditUser test', async ({}, testInfo) => {
     
    // eslint-disable-next-line prettier/prettier
     
    const editUserPage = new EditUserPage(page);
    await editUserPage.Edituser();
    const screenshot = await page.screenshot();
    await testInfo.attach('EditUser test screenshot', { body: screenshot, contentType: 'image/png' });
});
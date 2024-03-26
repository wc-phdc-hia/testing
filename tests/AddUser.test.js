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
 
const AddUserPage  = require('../playwright/pages/AddUserPage');
// eslint-disable-next-line import/no-unresolved

// This below test for adding new user

test('AddUser test', async ({}, testInfo) => {
     
    // eslint-disable-next-line prettier/prettier
     
    const addUserPage = new AddUserPage(page);
    await addUserPage.Adduser();
    const screenshot = await page.screenshot();
    await testInfo.attach('AddUser test screenshot', { body: screenshot, contentType: 'image/png' });
});
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
 
const DeleteUserPage  = require('../playwright/pages/DeleteUserPage');
// eslint-disable-next-line import/no-unresolved
 
// This below test for Deleting existing user

test('DeleteUser test', async ({}, testInfo) => {
     
    // eslint-disable-next-line prettier/prettier
     
    const deleteUserPage = new DeleteUserPage(page);
    await deleteUserPage.DeleteUser();
    const screenshot = await page.screenshot();
    await testInfo.attach('DeleteUser test screenshot', { body: screenshot, contentType: 'image/png' });
});
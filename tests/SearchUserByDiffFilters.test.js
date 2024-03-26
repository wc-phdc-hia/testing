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
 
const SearchUserByDiffFiltersPage  = require('../playwright/pages/SearchUserByDiffFiltersPage');
// This below test for Navigation to Users List  page and searching user by diff ways

test('Search User By ', async ({}, testInfo) => {
   
    // eslint-disable-next-line prettier/prettier
     
    const searchUserByDiffFiltersPage = new SearchUserByDiffFiltersPage(page);
    await searchUserByDiffFiltersPage.SearchByUserName();
    await searchUserByDiffFiltersPage.SearchByFirstName();
    await searchUserByDiffFiltersPage.SearchByLastName();
    await searchUserByDiffFiltersPage.SearchByEmail();
    await searchUserByDiffFiltersPage.SearchByType();
    await searchUserByDiffFiltersPage.SearchByLastLogin();
    const screenshot = await page.screenshot();
  await testInfo.attach('Search User test screenshot', { body: screenshot, contentType: 'image/png' });
});
/* eslint-disable no-empty-pattern */
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
 
const SearchPage  = require('../playwright/pages/SearchPage');

// This below test for Navigation to Search page and searching user by diff ways

test('Search By Folder', async ({}, testInfo) => {
     
    // eslint-disable-next-line prettier/prettier
const searchPage = new SearchPage(page);
      
    await searchPage.searchbyfolder();
    const screenshot = await page.screenshot();
    await testInfo.attach('searchbyfolder test screenshot', { body: screenshot, contentType: 'image/png' });
});

test('Search By IdNumber', async ({}, testInfo) => {
const searchPage = new SearchPage(page);

  await searchPage.searchbyIdNumber();
  const screenshot = await page.screenshot();
  await testInfo.attach('searchbyIdNumber test screenshot', { body: screenshot, contentType: 'image/png' });
});

test('Search By Surname', async ({}, testInfo) => {
const searchPage = new SearchPage(page);

  await searchPage.searchbySurname();
  const screenshot = await page.screenshot();
  await testInfo.attach('searchbySurname test screenshot', { body: screenshot, contentType: 'image/png' });
});

test('Search By DOB', async ({}, testInfo) => {
const searchPage = new SearchPage(page);

  await searchPage.searchbyDOB();
  const screenshot = await page.screenshot();
  await testInfo.attach('searchbyDOB test screenshot', { body: screenshot, contentType: 'image/png' });
});

test('Search By quickSearch', async ({}, testInfo) => {
const searchPage = new SearchPage(page);

  await searchPage.quickSearch();
  const screenshot = await page.screenshot();
  await testInfo.attach('quickSearch test screenshot', { body: screenshot, contentType: 'image/png' });
});

test('Search By recentPatient', async ({}, testInfo) => {
const searchPage = new SearchPage(page);

  await searchPage.recentPatient();
  const screenshot = await page.screenshot();
  await testInfo.attach('recentPatient test screenshot', { body: screenshot, contentType: 'image/png' });
});
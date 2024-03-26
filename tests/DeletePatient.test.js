/* eslint-disable prettier/prettier */

// import { test } from '@playwright/test';

const { test } = require('playwright/test');

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

const DeletePatientPage = require('../playwright/pages/DeletePatientPage');

// eslint-disable-next-line import/no-unresolved

// eslint-disable-next-line no-empty-pattern
test('DeletePatient test', async ({ }, testInfo) => {

  // eslint-disable-next-line prettier/prettier

  const deleteatientPage = new DeletePatientPage(page);
  await deleteatientPage.DeletePatient();
  const screenshot = await page.screenshot();
  await testInfo.attach('DeletePatient test screenshot', { body: screenshot, contentType: 'image/png' });
});
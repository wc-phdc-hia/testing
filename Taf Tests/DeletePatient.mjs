import { test } from '@playwright/test';
import DeletePatientPage from '../playwright/pages/DeletePatientPage.mjs';

let page;
let deletePatientPage;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  deletePatientPage = new DeletePatientPage(page);
});

test.afterAll(async () => {
  await page.close();
});

test('DeletePatient test', async ({}, testInfo) => {
  await deletePatientPage.deletePatient();
  const screenshot = await page.screenshot();
  await testInfo.attach('DeletePatient test screenshot', {
    body: screenshot,
    contentType: 'image/png',
  });
});

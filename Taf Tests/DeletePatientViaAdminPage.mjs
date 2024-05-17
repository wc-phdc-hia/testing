import { test } from '@playwright/test';
import DeletePatientViaPatientAdminPage from '../playwright/pages/DeletePatientViaPatientAdminPage.mjs';

let page;
let deletePatientViaPatientAdminPage;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  deletePatientViaPatientAdminPage = new DeletePatientViaPatientAdminPage(page);
});

test.afterAll(async () => {
  await page.close();
});

test('DeletePatientViaPatient test', async ({}, testInfo) => {
  await deletePatientViaPatientAdminPage.deletePatientViaPatientAdmin();
  const screenshot = await page.screenshot();
  await testInfo.attach('DeletePatientViaPatient test screenshot', {
    body: screenshot,
    contentType: 'image/png',
  });
});

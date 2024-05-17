import { test } from '@playwright/test';
import EditPatientPage from '../playwright/pages/EditPatientPage.mjs';

let page;
let editPatientPage;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  editPatientPage = new EditPatientPage(page);
});

test.afterAll(async () => {
  await page.close();
});

test('EditPatient test', async ({}, testInfo) => {
  await editPatientPage.editPatient();
  await editPatientPage.editPatientViaPatientAdmin();
  const screenshot = await page.screenshot();
  await testInfo.attach('EditPatient test screenshot', {
    body: screenshot,
    contentType: 'image/png',
  });
});

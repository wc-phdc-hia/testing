import { test, expect } from '@playwright/test';
import { AddNewPatientPage } from '../playwright/pages/AddNewPatientPage';

test.describe('AddNewPatient Tests', () => {
  let page;
  let addNewPatientPage;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    addNewPatientPage = new AddNewPatientPage(page);
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('AddNewPatient test', async ({}, testInfo) => {
    await addNewPatientPage.AddPatient();
    const screenshot = await page.screenshot();
    await testInfo.attach('AddNewPatient test screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });
  });
});

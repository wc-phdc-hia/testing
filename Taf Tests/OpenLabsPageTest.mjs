import { test } from 'playwright/test';
import LabsPage from '../playwright/pages/LabsPage.mjs';

let page;
let labsPage;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  labsPage = new LabsPage(page);
});

test.afterAll(async () => {
  await page.close();
});

test('Labs page test', async ({}, testInfo) => {
  await labsPage.gotoLabsPage();
  const screenshot = await page.screenshot();
  await testInfo.attach('Labs test screenshot', {
    body: screenshot,
    contentType: 'image/png',
  });
});

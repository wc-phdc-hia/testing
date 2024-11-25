import { test } from '@playwright/test';
import AddUserPage from '../playwright/pages/AddUserPage.mjs';

let page;
let addUserPage;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  addUserPage = new AddUserPage(page);
});

test.afterAll(async () => {
  await page.close();
});

test('AddUser test', async ({}, testInfo) => {
  await addUserPage.AddUser();
  const screenshot = await page.screenshot();
  await testInfo.attach('AddUser test screenshot', {
    body: screenshot,
    contentType: 'image/png',
  });
});

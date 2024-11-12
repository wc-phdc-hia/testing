import { test } from 'playwright/test';
import EditUserPage from '../playwright/pages/EditUserPage.mjs';

let page;
let editUserPage;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  editUserPage = new EditUserPage(page);
});

test.afterAll(async () => {
  await page.close();
});

test('EditUser test', async ({}, testInfo) => {
  await editUserPage.editUser(); // Use consistent camelCase naming
  const screenshot = await page.screenshot();
  await testInfo.attach('EditUser test screenshot', {
    body: screenshot,
    contentType: 'image/png',
  });
});

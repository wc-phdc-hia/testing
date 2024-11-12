import { test } from  "playwright/test";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

import EditUserPage from "../playwright/pages/EditUserPage.mjs";

// eslint-disable-next-line no-empty-pattern
test("EditUser test", async ({}, testInfo) => {
  const editUserPage = new EditUserPage(page);
  await editUserPage.Edituser();
  const screenshot = await page.screenshot();
  await testInfo.attach("EditUser test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

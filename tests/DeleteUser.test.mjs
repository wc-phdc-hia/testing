import { test } from "playwright/test";

import DeleteUserPage from "../playwright/pages/DeleteUserPage.mjs";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

// eslint-disable-next-line no-empty-pattern
test("DeleteUser test", async ({}, testInfo) => {
  const deleteUserPage = new DeleteUserPage(page);
  await deleteUserPage.DeleteUser();
  const screenshot = await page.screenshot();
  await testInfo.attach("DeleteUser test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

import { test } from "@playwright/test";

import AddUserPage from "../playwright/pages/AddUserPage.mjs";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

// eslint-disable-next-line no-empty-pattern
test("AddUser test", async ({}, testInfo) => {
  const addUserPage = new AddUserPage(page);
  await addUserPage.Adduser();
  const screenshot = await page.screenshot();
  await testInfo.attach("AddUser test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

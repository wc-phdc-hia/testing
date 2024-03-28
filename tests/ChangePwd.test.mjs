import { test } from "@playwright/test";

import { ChangePwdPage } from "../playwright/pages/ChangePwdPage.mjs";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

// eslint-disable-next-line no-empty-pattern
test("ChangePassword test", async ({}, testInfo) => {
  const changePwdPage = new ChangePwdPage(page);
  await changePwdPage.ChangePwd();
  const screenshot = await page.screenshot();
  await testInfo.attach("ChangePassword test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

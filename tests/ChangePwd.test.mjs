import { test } from "@playwright/test";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

import {ChangePwdPage} from "../playwright/pages/ChangePwdPage.mjs";

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

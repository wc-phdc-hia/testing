import { test }from "playwright/test";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

import LoginAfterResetPwdPage from "../playwright/pages/LoginAfterResetPwdPage.mjs";

// eslint-disable-next-line no-empty-pattern
test("LoginAfterResetPwd test", async ({}, testInfo) => {
  const loginAfterResetPwdPage = new LoginAfterResetPwdPage(page);
  await loginAfterResetPwdPage.LoginAfterResetPwd();
  const screenshot = await page.screenshot();
  await testInfo.attach("LoginAfterResetPwd test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

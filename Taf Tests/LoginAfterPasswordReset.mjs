import { test } from "playwright/test";
import LoginAfterResetPwdPage from "../playwright/pages/LoginAfterResetPwdPage.mjs";

let page;
let loginAfterResetPwdPage;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  loginAfterResetPwdPage = new LoginAfterResetPwdPage(page);
});

test.afterAll(async () => {
  await page.close();
});

test("LoginAfterResetPwd test", async ({}, testInfo) => {
  await loginAfterResetPwdPage.loginAfterResetPwd(); // Updated method name for consistency
  const screenshot = await page.screenshot();
  await testInfo.attach("LoginAfterResetPwd test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

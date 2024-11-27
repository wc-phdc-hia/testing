import { test, expect } from "playwright/test";
import LoginAfterResetPwdPage from "../playwright/pages/LoginAfterResetPwdPage.mjs";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test("Ensure Login Fails with Old Password After Reset", async ({}, testInfo) => {
  const loginAfterResetPwdPage = new LoginAfterResetPwdPage(page);

  // Attempt login with old password
  await loginAfterResetPwdPage.LoginWithOldPassword();

  // Verify error message
  const errorMessage = page.locator("text=Invalid username or password");
  await expect(errorMessage).toBeVisible();

  // Attach screenshot for validation
  const screenshot = await page.screenshot();
  await testInfo.attach("LoginWithOldPassword test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

test("Validate User is Prompted to Change Password After Login", async ({}, testInfo) => {
  const loginAfterResetPwdPage = new LoginAfterResetPwdPage(page);

  // Login using reset credentials
  await loginAfterResetPwdPage.LoginAfterResetPwd();

  // Verify user is prompted to change their password
  const changePasswordPrompt = page.locator("text=Reset Password");
  await expect(changePasswordPrompt).toBeVisible();

  // Attach screenshot for documentation
  const screenshot = await page.screenshot();
  await testInfo.attach("ChangePasswordPrompt screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

// eslint-disable-next-line no-empty-pattern
test("LoginAfterResetPwd test", async ({}, testInfo) => {
  const loginAfterResetPwdPage = new LoginAfterResetPwdPage(page);

  // Login with reset credentials
  await loginAfterResetPwdPage.LoginAfterResetPwd();

  // Take a screenshot for validation
  const screenshot = await page.screenshot();
  await testInfo.attach("LoginAfterResetPwd test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

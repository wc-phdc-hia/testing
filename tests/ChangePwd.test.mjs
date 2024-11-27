import { test, expect } from "@playwright/test";
import { ChangePwdPage } from "../playwright/pages/ChangePwdPage.mjs";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test.describe("Change Password Tests", () => {

  test("should change password successfully", async ({}, testInfo) => {
    const changePwdPage = new ChangePwdPage(page);
    await changePwdPage.ChangePwd("currentPassword123", "newPassword123!");

    const screenshot = await page.screenshot();
    await testInfo.attach("ChangePassword test screenshot", {
      body: screenshot,
      contentType: "image/png",
    });

    // Verify success message
    await expect(page.locator("text=Password changed successfully")).toBeVisible();
  });

  test("should show validation errors for missing required fields", async () => {
    const changePwdPage = new ChangePwdPage(page);
    await changePwdPage.clearForm();
    await changePwdPage.submitForm();

    // Check for required field error messages
    await expect(page.locator("text=Current password is required")).toBeVisible();
    await expect(page.locator("text=New password is required")).toBeVisible();
    await expect(page.locator("text=Confirm new password is required")).toBeVisible();
  });

  test("should show error if current password is incorrect", async () => {
    const changePwdPage = new ChangePwdPage(page);
    await changePwdPage.ChangePwd("wrongPassword123", "newPassword123!");

    // Verify error message for incorrect current password
    await expect(page.locator("text=Current password is incorrect")).toBeVisible();
  });

  test("should enforce password complexity requirements", async () => {
    const changePwdPage = new ChangePwdPage(page);
    await changePwdPage.ChangePwd("currentPassword123", "simple");

    // Verify password complexity validation message
    await expect(page.locator("text=Password must include uppercase, lowercase, number, and special character")).toBeVisible();
  });

  test("should show error if new password and confirm password do not match", async () => {
    const changePwdPage = new ChangePwdPage(page);
    await changePwdPage.ChangePwd("currentPassword123", "newPassword123!", "differentPassword123!");

    // Verify mismatch error message
    await expect(page.locator("text=New password and confirmation do not match")).toBeVisible();
  });

});

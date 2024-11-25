import { test, expect } from "playwright/test";
import EditUserPage from "../playwright/pages/EditUserPage.mjs";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test.describe("Edit User Tests", () => {

  test("Edit a User and verify updates", async ({}, testInfo) => {
    const editUserPage = new EditUserPage(page);

    // Edit user details
    await editUserPage.Edituser({ username: "newUser123", email: "newuser123@example.com" });

    // Verify user details are updated
    const updatedUsername = await page.locator("text=newUser123");
    const updatedEmail = await page.locator("text=newuser123@example.com");
    await expect(updatedUsername).toHaveCount(1); // Confirm username is updated
    await expect(updatedEmail).toHaveCount(1); // Confirm email is updated

    // Attach a screenshot for verification purposes
    const screenshot = await page.screenshot();
    await testInfo.attach("EditUser test screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  });
});

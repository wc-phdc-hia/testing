import { test, expect } from "@playwright/test";
import DeleteUserPage from "../playwright/pages/DeleteUserPage.mjs";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test.describe("Delete User Tests", () => {

  test("Delete a User and verify deletion", async ({}, testInfo) => {
    const deleteUserPage = new DeleteUserPage(page);

    // Delete the user
    await deleteUserPage.DeleteUser("user123");

    // Verify that the user no longer appears in the list
    const userRecord = page.locator("text=user123");
    await expect(userRecord).toHaveCount(0);  // Assert user is absent after deletion

    // Attach a screenshot for verification
    const screenshot = await page.screenshot();
    await testInfo.attach("DeleteUser test screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  });
});

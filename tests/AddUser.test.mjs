import { test, expect } from "@playwright/test";
import AddUserPage from "../playwright/pages/AddUserPage.mjs";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test.describe("AddUser Tests", () => {

  test("should add a new user successfully", async ({}, testInfo) => {
    const addUserPage = new AddUserPage(page);
    await addUserPage.AddUser();

    const screenshot = await page.screenshot();
    await testInfo.attach("AddUser test screenshot", {
      body: screenshot,
      contentType: "image/png",
    });

    // Verification after adding user
    await expect(page.locator("text=User added successfully")).toBeVisible();
  });

  test("should display validation errors for missing required fields", async () => {
    const addUserPage = new AddUserPage(page);
    await addUserPage.clearForm();
    await addUserPage.submitForm();

    // Validate that error messages appear for required fields
    await expect(page.locator("text=Name is required")).toBeVisible();
    await expect(page.locator("text=Email is required")).toBeVisible();
  });

  test("should reset the form fields when the reset button is clicked", async () => {
    const addUserPage = new AddUserPage(page);
    await addUserPage.fillForm({
      name: "Jane Doe",
      email: "jane.doe@example.com",
      contactNumber: "1234567890"
    });
    await addUserPage.resetForm();

    // Verify that form fields are reset
    await expect(page.locator("#name")).toHaveValue("");
    await expect(page.locator("#email")).toHaveValue("");
    await expect(page.locator("#contactNumber")).toHaveValue("");
  });

  test("should display an error for duplicate user entries", async () => {
    const addUserPage = new AddUserPage(page);

    // Add the same user twice
    await addUserPage.AddUser({ name: "John Doe", email: "john.doe@example.com" });
    await addUserPage.AddUser({ name: "John Doe", email: "john.doe@example.com" });

    // Verify error for duplicate user
    await expect(page.locator("text=User already exists")).toBeVisible();
  });

  test("should restrict invalid email format", async () => {
    const addUserPage = new AddUserPage(page);
    await addUserPage.fillForm({
      name: "Invalid Email",
      email: "invalid-email-format",
      contactNumber: "1234567890"
    });
    await addUserPage.submitForm();

    // Verify email format validation message
    await expect(page.locator("text=Invalid email format")).toBeVisible();
  });
});

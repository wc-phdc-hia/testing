import { test, expect } from "@playwright/test";
import SearchUserByDiffFiltersPage from "../playwright/pages/SearchUserByDiffFiltersPage.mjs";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test.describe("Search User By Different Filters Tests", () => {

  test("Search by Username", async ({}, testInfo) => {
    const searchUserByDiffFiltersPage = new SearchUserByDiffFiltersPage(page);
    
    await searchUserByDiffFiltersPage.SearchByUserName("username123");

    // Verify that the results include the specified username
    await expect(page.locator("text=Username: username123")).toBeVisible();

    const screenshot = await page.screenshot();
    await testInfo.attach("Search by Username screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  });

  test("Search by First Name", async ({}, testInfo) => {
    const searchUserByDiffFiltersPage = new SearchUserByDiffFiltersPage(page);

    await searchUserByDiffFiltersPage.SearchByFirstName("John");

    // Verify that the results include the specified first name
    await expect(page.locator("text=First Name: John")).toBeVisible();

    const screenshot = await page.screenshot();
    await testInfo.attach("Search by First Name screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  });

  test("Search by Last Name", async ({}, testInfo) => {
    const searchUserByDiffFiltersPage = new SearchUserByDiffFiltersPage(page);

    await searchUserByDiffFiltersPage.SearchByLastName("Doe");

    // Verify that the results include the specified last name
    await expect(page.locator("text=Last Name: Doe")).toBeVisible();

    const screenshot = await page.screenshot();
    await testInfo.attach("Search by Last Name screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  });

  test("Search by Email", async ({}, testInfo) => {
    const searchUserByDiffFiltersPage = new SearchUserByDiffFiltersPage(page);

    await searchUserByDiffFiltersPage.SearchByEmail("john.doe@example.com");

    // Verify that the results include the specified email
    await expect(page.locator("text=Email: john.doe@example.com")).toBeVisible();

    const screenshot = await page.screenshot();
    await testInfo.attach("Search by Email screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  });

  test("Search by User Type", async ({}, testInfo) => {
    const searchUserByDiffFiltersPage = new SearchUserByDiffFiltersPage(page);

    await searchUserByDiffFiltersPage.SearchByType("Admin");

    // Verify that the results include users of the specified type
    await expect(page.locator("text=User Type: Admin")).toBeVisible();

    const screenshot = await page.screenshot();
    await testInfo.attach("Search by User Type screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  });

  test("Search by Last Login Date", async ({}, testInfo) => {
    const searchUserByDiffFiltersPage = new SearchUserByDiffFiltersPage(page);

    await searchUserByDiffFiltersPage.SearchByLastLogin("2023-01-01");

    // Verify that the results include users with the specified last login date
    await expect(page.locator("text=Last Login: 2023-01-01")).toBeVisible();

    const screenshot = await page.screenshot();
    await testInfo.attach("Search by Last Login screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  });

});

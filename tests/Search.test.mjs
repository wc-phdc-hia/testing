import { test, expect } from "@playwright/test";
import SearchPage from "../playwright/pages/SearchPage.mjs";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test.describe("Search Page Tests", () => {

  test("Search By Folder", async ({}, testInfo) => {
    const searchPage = new SearchPage(page);

    await searchPage.searchbyFolder("exampleFolder");
    
    // Verify results for search by folder
    await expect(page.locator("text=Folder: exampleFolder")).toBeVisible();

    const screenshot = await page.screenshot();
    await testInfo.attach("searchbyFolder test screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  });

  test("Search By IdNumber", async ({}, testInfo) => {
    const searchPage = new SearchPage(page);

    await searchPage.searchbyIdNumber("12345");

    // Verify results for search by ID number
    await expect(page.locator("text=ID: 12345")).toBeVisible();

    const screenshot = await page.screenshot();
    await testInfo.attach("searchbyIdNumber test screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  });

  test("Search By Surname", async ({}, testInfo) => {
    const searchPage = new SearchPage(page);

    await searchPage.searchbySurname("Doe");

    // Verify results for search by surname
    await expect(page.locator("text=Surname: Doe")).toBeVisible();

    const screenshot = await page.screenshot();
    await testInfo.attach("searchbySurname test screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  });

  test("Search By DOB", async ({}, testInfo) => {
    const searchPage = new SearchPage(page);

    await searchPage.searchbyDOB("01/01/1990");

    // Verify results for search by date of birth
    await expect(page.locator("text=DOB: 01/01/1990")).toBeVisible();

    const screenshot = await page.screenshot();
    await testInfo.attach("searchbyDOB test screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  });

  test("Quick Search", async ({}, testInfo) => {
    const searchPage = new SearchPage(page);

    await searchPage.quickSearch("quick search term");

    // Verify results for quick search
    await expect(page.locator("text=Quick Search Result")).toBeVisible();

    const screenshot = await page.screenshot();
    await testInfo.attach("quickSearch test screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  });

  test("Search By Recent Patient", async ({}, testInfo) => {
    const searchPage = new SearchPage(page);

    await searchPage.recentPatient();

    // Verify that recent patient details are displayed
    await expect(page.locator("text=Recent Patient")).toBeVisible();

    const screenshot = await page.screenshot();
    await testInfo.attach("recentPatient test screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  });

});

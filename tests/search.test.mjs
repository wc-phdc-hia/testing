import { test } from "@playwright/test";

import {
  Search,
  searchbyIdNumber,
  searchbyDOB,
  searchbyFirstname,
  searchbySurname,
  recentPatient,
  quickSearch,
} from "../playwright/Functions/Search.mjs";

// This below test for Navigation to Search page and searching user by diff ways
test("Search By Folder", async ({ page }, testInfo) => {
  await Search(page);
  const screenshot = await page.screenshot();
  await testInfo.attach("searchbyfolder test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

test("Search By IdNumber", async ({ page }, testInfo) => {
  await searchbyIdNumber(page);
  const screenshot = await page.screenshot();
  await testInfo.attach("searchbyIdNumber test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

test("Search By Firstname", async ({ page }, testInfo) => {
  await searchbyFirstname(page);
  const screenshot = await page.screenshot();
  await testInfo.attach("searchbyFirstname test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

test("Search By Surname", async ({ page }, testInfo) => {
  await searchbySurname(page);
  const screenshot = await page.screenshot();
  await testInfo.attach("searchbySurname test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

test("Search By DOB", async ({ page }, testInfo) => {
  await searchbyDOB(page);
  const screenshot = await page.screenshot();
  await testInfo.attach("searchbyDOB test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

test("Search By quickSearch", async ({ page }, testInfo) => {
  await quickSearch(page);
  const screenshot = await page.screenshot();
  await testInfo.attach("quickSearch test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

test("Search By recentPatient", async ({ page }, testInfo) => {
  await recentPatient(page);
  const screenshot = await page.screenshot();
  await testInfo.attach("recentPatient test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

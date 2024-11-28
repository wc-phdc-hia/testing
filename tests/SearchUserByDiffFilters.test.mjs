import { test } from "playwright/test";

import SearchUserByDiffFiltersPage from "../playwright/pages/SearchUserByDiffFiltersPage.mjs";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

// This below test for Navigation to Users List  page and searching user by diff ways

// eslint-disable-next-line no-empty-pattern
test("Search User By ", async ({}, testInfo) => {
  const searchUserByDiffFiltersPage = new SearchUserByDiffFiltersPage(page);
  await searchUserByDiffFiltersPage.SearchByUserName();
  await searchUserByDiffFiltersPage.SearchByFirstName();
  await searchUserByDiffFiltersPage.SearchByLastName();
  await searchUserByDiffFiltersPage.SearchByEmail();
  await searchUserByDiffFiltersPage.SearchByType();
  await searchUserByDiffFiltersPage.SearchByLastLogin();
  const screenshot = await page.screenshot();
  await testInfo.attach("Search User test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

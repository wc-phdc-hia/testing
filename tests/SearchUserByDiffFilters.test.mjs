import { test } from "playwright/test";

import {
  SearchByEmail,
  SearchByFirstName,
  SearchByLastLogin,
  SearchByLastName,
  SearchByType,
  SearchByUserName,
} from "../playwright/Functions/SearchUserByDiffFilters.mjs";

// This below test for Navigation to Users List  page and searching user by diff ways
test("Search User By ", async ({ page }, testInfo) => {
  await SearchByUserName(page);
  await SearchByFirstName(page);
  await SearchByLastName(page);
  await SearchByEmail(page);
  await SearchByType(page);
  await SearchByLastLogin(page);
  const screenshot = await page.screenshot();
  await testInfo.attach("Search User test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

import { test }  from "playwright/test";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

import FollowUpPage from "../playwright/pages/FollowUpPage.mjs";

// eslint-disable-next-line no-empty-pattern
test("followUp test", async ({}, testInfo) => {
  const followUpPage = new FollowUpPage(page);
  await followUpPage.gotoFollowUpPage();
  const screenshot = await page.screenshot();
  await testInfo.attach("followUp test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

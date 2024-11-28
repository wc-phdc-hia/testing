import { test } from "playwright/test";

import EncountersPage from "../playwright/pages/EncountersPage.mjs";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

// eslint-disable-next-line no-empty-pattern
test("EncountersPage test", async ({}, testInfo) => {
  const encountersPage = new EncountersPage(page);
  await encountersPage.EncountersPage();
  const screenshot = await page.screenshot();
  await testInfo.attach("EncountersPage test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

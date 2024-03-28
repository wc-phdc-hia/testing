import { test }  from "playwright/test";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

import LabsPage from "../playwright/pages/LabsPage.mjs";

// eslint-disable-next-line no-empty-pattern
test("labs test", async ({}, testInfo) => {
  const labsPage = new LabsPage(page);
  await labsPage.gotoLabsPage();
  const screenshot = await page.screenshot();
  await testInfo.attach("Medicines test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

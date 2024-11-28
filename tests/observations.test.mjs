import { test } from "@playwright/test";
import ObservationsPage from "../playwright/pages/ObservationsPage.mjs";

let page;
let observationsPage;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  observationsPage = new ObservationsPage(page);
});

test.afterAll(async () => {
  await page.close();
});

// eslint-disable-next-line no-empty-pattern
test("Observations test", async ({}, testInfo) => {
  await observationsPage.Observations();
  const screenshot = await page.screenshot();
  await testInfo.attach("Observations test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

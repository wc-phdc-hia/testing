import { test } from "@playwright/test";
import ReportingPage from "../playwright/pages/ReportingPage.mjs";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

// eslint-disable-next-line no-empty-pattern
test("Reporting test", async ({}, testInfo) => {
  const reportingPage = new ReportingPage(page);
  await reportingPage.ReportingPage();
  const screenshot = await page.screenshot();
  await testInfo.attach("Reporting test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

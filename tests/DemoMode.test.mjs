import { test } from "playwright/test";
import DemoModePage from "../playwright/pages/DemoModePage.mjs";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

// eslint-disable-next-line no-empty-pattern
test("DemoMode test", async ({}, testInfo) => {
  const demoModePage = new DemoModePage(page);
  await demoModePage.DemoMode();
  const screenshot = await page.screenshot();
  await testInfo.attach("DemoMode test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

import { test } from "@playwright/test";
import { Reporting } from "../playwright/Functions/Reporting.mjs";

test("Reporting test", async ({ page }, testInfo) => {
  await Reporting(page);
  const screenshot = await page.screenshot();
  await testInfo.attach("Reporting test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

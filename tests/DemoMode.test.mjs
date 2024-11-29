import { test } from "playwright/test";
import { DemoMode } from "../playwright/Functions/DemoMode.mjs";

test("Demo Mode", async ({ page }, testInfo) => {
  await DemoMode();
  const screenshot = await page.screenshot();
  await testInfo.attach("DemoMode test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

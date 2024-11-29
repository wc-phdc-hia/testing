import { test } from "@playwright/test";
import { Observations } from "../playwright/Functions/Observations.mjs";

test("Observations test", async ({ page }, testInfo) => {
  await Observations(page);
  const screenshot = await page.screenshot();
  await testInfo.attach("Observations test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

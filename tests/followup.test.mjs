import { test } from "playwright/test";

import { FollowUp } from "../playwright/Functions/Follow-up.mjs";

test("followUp test", async ({ page }, testInfo) => {
  await FollowUp(page);
  const screenshot = await page.screenshot();
  await testInfo.attach("followUp test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

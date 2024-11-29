import { test } from "playwright/test";

import Labs from "../playwright/Functions/Labs.mjs";

test("labs test", async ({ page }, testInfo) => {
  await Labs(page);
  const screenshot = await page.screenshot();
  await testInfo.attach("Medicines test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

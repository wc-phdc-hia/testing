import { test } from "playwright/test";

import { Encounters } from "../playwright/Functions/Encounters.mjs";

test("Encounters page test", async ({ page }, testInfo) => {
  await Encounters(page);
  const screenshot = await page.screenshot();
  await testInfo.attach("EncountersPage test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

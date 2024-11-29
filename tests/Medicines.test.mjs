import { test } from "playwright/test";
import Medicines from "../playwright/Functions/Medicines.mjs";

test("Medicines test", async ({ page }, testInfo) => {
  await Medicines(page);
  const screenshot = await page.screenshot();
  await testInfo.attach("Medicines test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

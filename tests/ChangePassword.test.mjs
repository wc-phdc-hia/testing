import { test } from "@playwright/test";
import { ChangePassword } from "../playwright/Functions/ChangePassword.mjs";

test("ChangePassword test", async ({ page }, testInfo) => {
  await ChangePassword(page);
  const screenshot = await page.screenshot();
  await testInfo.attach("ChangePassword test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

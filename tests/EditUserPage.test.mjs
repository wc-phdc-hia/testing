import { test } from "playwright/test";
import Edituser from "../playwright/Functions/EditUser.mjs";

test("EditUser test", async ({ page }, testInfo) => {
  await Edituser();
  const screenshot = await page.screenshot();
  await testInfo.attach("EditUser test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

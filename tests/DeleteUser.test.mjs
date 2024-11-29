import { test } from "playwright/test";
import DeleteUser from "../playwright/Functions/DeleteUser.mjs";

test("Delete a user test", async ({ page }, testInfo) => {
  await DeleteUser();
  const screenshot = await page.screenshot();
  await testInfo.attach("DeleteUser test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

import { test } from "@playwright/test";
import { DeletePatient } from "../playwright/Functions/DeletePatient.mjs";

test("Delete a patient", async ({ page }, testInfo) => {
  await DeletePatient(page);
  const screenshot = await page.screenshot();
  await testInfo.attach("DeletePatient test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

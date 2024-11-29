import { test } from "@playwright/test";

import { DeletePatientViaPatientAdmin } from "../playwright/Functions/DeletePatientViaPatientAdmin.mjs";

test("Delete a patient via patient admin", async ({ page }, testInfo) => {
  await DeletePatientViaPatientAdmin(page);
  const screenshot = await page.screenshot();
  await testInfo.attach("DeletePatientViaPatient test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

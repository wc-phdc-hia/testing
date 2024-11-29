import { test } from "playwright/test";
import {
  EditPatient,
  EditPatientViaPatientAdmin,
} from "../playwright/Functions/EditPatient.mjs";

test("Edit a patient", async ({ page }, testInfo) => {
  await EditPatient(page);
  const screenshot = await page.screenshot();
  await testInfo.attach("EditPatient test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

test("Edit a patient via patient admin", async ({ page }, testInfo) => {
  await EditPatientViaPatientAdmin(page);
  const screenshot = await page.screenshot();
  await testInfo.attach("EditPatientViaPatientAdmin test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

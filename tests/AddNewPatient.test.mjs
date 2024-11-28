import { test } from "@playwright/test";
import AddNewPatient from "../playwright/Functions/AddNewPatient.mjs";

test("Add a new patient", async ({ page }, testInfo) => {
  await AddNewPatient(page);
  const screenshot = await page.screenshot();
  await testInfo.attach("AddNewPatient test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

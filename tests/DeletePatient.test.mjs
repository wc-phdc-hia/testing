import { test, expect } from '@playwright/test';
import DeletePatientPage from "../playwright/pages/DeletePatientPage.mjs";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test.describe("Delete Patient Tests", () => {

  test("Delete a Patient and verify deletion", async ({}, testInfo) => {
    const deletePatientPage = new DeletePatientPage(page);
    
    // Delete the patient
    await deletePatientPage.DeletePatient("patient123");

    // Verify the patient no longer appears in the list
    const patientRecord = page.locator("text=patient123");
    await expect(patientRecord).toHaveCount(0);  // Expect no records for the deleted patient

    // Take a screenshot after deletion for verification
    const screenshot = await page.screenshot();
    await testInfo.attach("DeletePatient test screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  });
});

import { test, expect } from "playwright/test";
import EditPatientPage from "../playwright/pages/EditPatientPage.mjs";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test.describe("Edit Patient Tests", () => {

  test("Edit Patient details and verify updates", async ({}, testInfo) => {
    const editPatientPage = new EditPatientPage(page);

    // Edit patient details using the EditPatient method
    await editPatientPage.EditPatient({ name: "John Doe", age: 45 });
    
    // Verify patient details are updated
    const patientName = await page.locator("text=John Doe");
    const patientAge = await page.locator("text=45");
    await expect(patientName).toHaveCount(1); // Expect patient name is updated
    await expect(patientAge).toHaveCount(1); // Expect patient age is updated

    // Edit patient details using the EditPatientViaPatientAdmin method
    await editPatientPage.EditPatientViaPatientAdmin({ name: "Jane Smith", age: 50 });
    
    // Verify updated details in the Patient Admin section
    const updatedName = await page.locator("text=Jane Smith");
    const updatedAge = await page.locator("text=50");
    await expect(updatedName).toHaveCount(1); // Expect patient name is updated in Patient Admin
    await expect(updatedAge).toHaveCount(1); // Expect patient age is updated in Patient Admin

    // Attach a screenshot for verification purposes
    const screenshot = await page.screenshot();
    await testInfo.attach("EditPatient test screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  });
});

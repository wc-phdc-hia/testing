import { test } from "@playwright/test";

import DeletePatientViaPatientAdminPage from "../playwright/pages/DeletePatientViaPatientAdminPage.mjs";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

// eslint-disable-next-line no-empty-pattern
test("DeletePatientViaPatient test", async ({}, testInfo) => {
  const deletePatientViaPatientAdminPage = new DeletePatientViaPatientAdminPage(
    page
  );
  await deletePatientViaPatientAdminPage.DeletePatientViaPatientAdmin();
  const screenshot = await page.screenshot();
  await testInfo.attach("DeletePatientViaPatient test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

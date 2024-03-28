import { test } from "@playwright/test";

import DeletePatientPage from "../playwright/pages/DeletePatientPage.mjs";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

// eslint-disable-next-line no-empty-pattern
test("DeletePatient test", async ({}, testInfo) => {
  const deletepatientPage = new DeletePatientPage(page);
  await deletepatientPage.DeletePatient();
  const screenshot = await page.screenshot();
  await testInfo.attach("DeletePatient test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});
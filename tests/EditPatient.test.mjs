import { test } from "playwright/test";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

import EditPatientPage from "../playwright/pages/EditPatientPage.mjs";

// eslint-disable-next-line no-empty-pattern
test("EditPatient test", async ({}, testInfo) => {
  const editPatientPage = new EditPatientPage(page);
  await editPatientPage.EditPatient();
  await editPatientPage.EditPatientViaPatientAdmin();
  const screenshot = await page.screenshot();
  await testInfo.attach("EditPatient test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

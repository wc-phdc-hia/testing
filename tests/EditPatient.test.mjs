import { test } from "playwright/test";
import EditPatientPage from "../playwright/pages/EditPatientPage.mjs";

let page;
let editPatientPage;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  editPatientPage = new EditPatientPage(page);
});

test.afterAll(async () => {
  await page.close();
});

// eslint-disable-next-line no-empty-pattern
test("EditPatient test", async ({}, testInfo) => {
  await editPatientPage.EditPatient();
  await editPatientPage.EditPatientViaPatientAdmin();
  const screenshot = await page.screenshot();
  await testInfo.attach("EditPatient test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

import { test } from "@playwright/test";
// eslint-disable-next-line import/no-named-as-default
import AddNewPatientPage from "../playwright/pages/AddNewPatientPage.mjs";

let page;
let addNewPatientPage;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  addNewPatientPage = new AddNewPatientPage(page);
});

test.afterAll(async () => {
  await page.close();
});

// eslint-disable-next-line no-empty-pattern
test("AddNewPatient test", async ({}, testInfo) => {
  await addNewPatientPage.AddPatient();
  const screenshot = await page.screenshot();
  await testInfo.attach("AddNewPatient test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

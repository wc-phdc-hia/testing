import { test } from "playwright/test";
import MedicinesPage from "../playwright/pages/MedicinesPage.mjs";

let page;
let medicinesPage;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  medicinesPage = new MedicinesPage(page);
});

test.afterAll(async () => {
  await page.close();
});

test("Medicines test", async ({}, testInfo) => {
  await medicinesPage.gotoMedicinesPage();
  const screenshot = await page.screenshot();
  await testInfo.attach("Medicines test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

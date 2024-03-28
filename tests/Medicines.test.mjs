import { test } from "playwright/test";

import MedicinesPage from "../playwright/pages/MedicinesPage.mjs";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

// eslint-disable-next-line no-empty-pattern
test("Medicines test", async ({}, testInfo) => {
  const medicinesPage = new MedicinesPage(page);
  await medicinesPage.gotoMedicinesPage();
  const screenshot = await page.screenshot();
  await testInfo.attach("Medicines test screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});

import { test } from "playwright/test";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

import MedicinesPage from "../playwright/pages/MedicinesPage.mjs";

// eslint-disable-next-line no-empty-pattern
test.describe("Medicines Page Tests", () => {
  test("Navigate to Medicines Page", async ({}, testInfo) => {
    const medicinesPage = new MedicinesPage(page);

    // Navigate to the Medicines page
    await medicinesPage.gotoMedicinesPage();

    // Verify the page loaded correctly
    const pageTitle = page.locator("h1:has-text('Medicines')");
    await expect(pageTitle).toBeVisible();

    // Take a screenshot
    const screenshot = await page.screenshot();
    await testInfo.attach("Medicines test screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  });
});
 
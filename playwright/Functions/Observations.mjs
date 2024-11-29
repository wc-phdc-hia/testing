import UtilityMethods from "../utilities/UtilityMethods.mjs";

export async function Observations(page) {
  const utils = new UtilityMethods(page);

  await utils.goTo(process.env.PLAYWRIGHT_TARGET_URL);
  await utils.click("#UnMaskedValue_SearchDetailsModel_ClinicomNumber");
  await utils.locateFill(
    "#UnMaskedValue_SearchDetailsModel_ClinicomNumber",
    process.env.PLAYWRIGHT_FOLDERNO
  );
  await utils.clickButtonByRoleAndName("button", "Search");
  await utils.clickButtonByRoleAndName("link", process.env.PLAYWRIGHT_FOLDERNO);
  await utils.clickButtonByRoleAndName("button", "Continue");
  await utils.click("#kt_aside_toggler");
  await utils.click('span.kt-menu__link-text:has-text("Observations")');
  await utils.clickButtonByRoleAndName("heading", "Filter");
  await utils.clickButtonByRoleAndName("button", "ON");
  // await page.getByRole("heading", { name: "Filter" }).click();
  // await page.getByRole("button", { name: "ON" }).click();

  await utils.page
    .getByRole("treeitem", { name: process.env.PLAYWRIGHT_OBSERVATIONITEM })
    .locator("span")
    .nth(3)
    .click();
  await utils.clickButtonByRoleAndName("link", "Filter");
  // await page.getByRole("link", { name: "Filter" }).click();
}

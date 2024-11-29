import UtilityMethods from "../utilities/UtilityMethods.mjs";

export async function Medicines(page) {
  const utils = new UtilityMethods(page);
  // medicines page
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
  await utils.click('span.kt-menu__link-text:has-text("Medicines")');
  await utils.page.waitForTimeout(3000);
  const elementLocator = utils.page.locator("#filter-on");
  await elementLocator.waitFor({ state: "visible" });
  await elementLocator.click();
  await utils.page
    .getByRole("treeitem", { name: process.env.PLAYWRIGHT_MEDICINECODE1 })
    .getByRole("checkbox")
    .click();
  await utils.clickButtonByRoleAndName("link", "Filter");
  await utils.click("#filter-off");
  await utils.click("#pivot-drug-on");
  await utils.page
    .getByRole("treeitem", { name: process.env.PLAYWRIGHT_MEDICINECODE2 })
    .getByRole("checkbox")
    .click();
  await utils.clickButtonByRoleAndName("link", "Filter");
}

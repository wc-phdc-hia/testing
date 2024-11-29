import UtilityMethods from "../utilities/UtilityMethods.mjs";

export async function Labs(page) {
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
  await utils.click('span.kt-menu__link-text:has-text("Labs")');
  await utils.page.waitForTimeout(3000);
  await utils.click("#whitelist-on");
  await utils.click("#whitelist-off");
  await utils.click("#filter-on");
  await utils.page.waitForTimeout(3000);
  await utils.page
    .getByRole("treeitem", { name: process.env.PLAYWRIGHT_LABSCODE1 })
    .getByRole("checkbox")
    .click();
  await utils.clickButtonByRoleAndName("link", "Filter");
  await utils.click("#filter-off");
  await utils.clickButtonByRoleAndName("button", "BY TEST");
  await utils.page
    .getByRole("treeitem", { name: process.env.PLAYWRIGHT_LABSCODE2 })
    .getByRole("checkbox")
    .click();
  await utils.clickButtonByRoleAndName("link", "Filter");
  await utils.click("#pivot-off");
  await utils.page.waitForTimeout(3000);
  await utils.clickButtonByRoleAndName("button", "BY DATE");
  await utils.click("#pivot-off");
}

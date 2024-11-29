import UtilityMethods from "../utilities/UtilityMethods.mjs";

export async function Encounters(page) {
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
  await utils.clickButtonByRoleAndName("link", "Encounters");
  // Eye icon leads to encounter details
  const viewDetailsLocator = utils.page
    .locator('a.btn[data-original-title="View encounter details"]')
    .first();
  await viewDetailsLocator.click();
}

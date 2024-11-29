import UtilityMethods from "../utilities/UtilityMethods.mjs";

export async function DemoMode(page) {
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
  await utils.click('span.kt-menu__link-text:has-text("Inferred Episodes")');
  // Eye icon leads to inferred episodes details
  await utils.clickIcon(
    'a.btn.btn-info.btn-elevate.btn-circle.btn-icon[data-original-title="View episode characteristics"]'
  );
}

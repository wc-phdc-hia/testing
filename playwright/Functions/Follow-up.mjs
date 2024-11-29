import UtilityMethods from "../utilities/UtilityMethods.mjs";

export async function FollowUp(page) {
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
  await utils.click('span.kt-menu__link-text:has-text("Follow-ups")');
  await utils.clickButtonByRoleAndName("button", "Create Follow-up ");
  await utils.clickButtonByRoleAndName("link", "Create General Note");
  await utils.selectOptionByRole("combobox", "Health condition", "Pregnancy");
  await utils.selectOptionByRole("combobox", "Status", "Resolved");
  await utils.selectOptionByRole("combobox", "Follow-up Action", "Other");
  await utils.clickElementById("Notes");
  await utils.fillInputById("Notes", "Testing");
  await utils.clickButtonByRoleAndName("button", "Create");
  await utils.page.waitForTimeout(1000);
}

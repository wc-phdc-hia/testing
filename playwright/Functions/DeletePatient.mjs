import UtilityMethods from "../utilities/UtilityMethods.mjs";

export async function DeletePatient(page) {
  const utils = new UtilityMethods(page);

  await utils.goTo(process.env.PLAYWRIGHT_TARGET_URL);
  await utils.click("#UnMaskedValue_SearchDetailsModel_FirstName");
  await utils.locateFill(
    "#UnMaskedValue_SearchDetailsModel_FirstName",
    process.env.PLAYWRIGHT_ADDPATIENTFIRSTNAME
  );
  await utils.click("#UnMaskedValue_SearchDetailsModel_Surname");
  await utils.locateFill(
    "#UnMaskedValue_SearchDetailsModel_Surname",
    process.env.PLAYWRIGHT_ADDPATIENTLASTNAME
  );
  await utils.clickButtonByRoleAndName("button", "Search");
  await utils.clickButtonByRoleAndName(
    "link",
    process.env.PLAYWRIGHT_ADDPATIENTFOLDERNO
  );
  await utils.clickButtonByRoleAndName("button", "Continue");
  await utils.page.waitForTimeout(1000);
  await utils.clickButtonByRoleAndName("button", "Actions");
  await utils.clickButtonByRoleAndName("button", "Delete");
}

import UtilityMethods from "../utilities/UtilityMethods.mjs";

export default async function AddNewPatient(page) {
  const utils = new UtilityMethods(page);

  await utils.goTo(process.env.PLAYWRIGHT_TARGET_URL);
  await utils.page.waitForSelector(
    "#UnMaskedValue_SearchDetailsModel_ClinicomNumber",
    { state: "visible" }
  );
  await utils.click("#UnMaskedValue_SearchDetailsModel_ClinicomNumber");
  await utils.locateFill(
    "#UnMaskedValue_SearchDetailsModel_ClinicomNumber",
    process.env.PLAYWRIGHT_ADDPATIENTFOLDERNO
  );
  await utils.clickButtonByRoleAndName("button", "Search");
  await utils.clickButtonByRoleAndName("link", "Add Patient");
  await utils.click("#FirstName");
  await utils.locateFill(
    "#FirstName",
    process.env.PLAYWRIGHT_ADDPATIENTFIRSTNAME
  );
  await utils.click("#Surname");
  await utils.locateFill("#Surname", process.env.PLAYWRIGHT_ADDPATIENTLASTNAME);

  await utils.click("#IdNumber");
  await utils.locateFill("#IdNumber", process.env.PLAYWRIGHT_ADDPATIENTIDNO);
  await utils.page
    .locator("#Sex")
    .selectOption(process.env.PLAYWRIGHT_ADDPATIENTSEX);
  await utils.locateFill("#DateOfBirth", process.env.PLAYWRIGHT_ADDPATIENTDOB);
  await utils.page.waitForTimeout(3000);
  await utils.clickButtonByRoleAndName("button", "Submit");
}

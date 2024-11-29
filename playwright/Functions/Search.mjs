import UtilityMethods from "../utilities/UtilityMethods.mjs";

export async function Search(page) {
  const utils = new UtilityMethods(page);

  await utils.goTo(process.env.PLAYWRIGHT_TARGET_URL);
  await utils.click("#UnMaskedValue_SearchDetailsModel_ClinicomNumber");
  await utils.locateFill(
    "#UnMaskedValue_SearchDetailsModel_ClinicomNumber",
    process.env.PLAYWRIGHT_FOLDERNO
  );
  await utils.clickButtonByRoleAndName("button", "Search");
  await utils.click('//*[@id="kt_table_1"]/tbody/tr/td[1]/a');

  await utils.clickButtonByRoleAndName("button", "Continue");
  await utils.page.waitForTimeout(2000);
  await utils.clickButtonByRoleAndName("link", "Inferred episodes");
  await utils.click("#searchMenuItem");
}

export async function searchbyIdNumber(page) {
  const utils = new UtilityMethods(page);
  await utils.click("#UnMaskedValue_SearchDetailsModel_IdNumber");
  await utils.locateFill(
    "#UnMaskedValue_SearchDetailsModel_IdNumber",
    process.env.PLAYWRIGHT_IDNO
  );
  await utils.clickButtonByRoleAndName("button", "Search");
  await utils.clickButtonByRoleAndName("link", process.env.PLAYWRIGHT_FOLDERNO);
  await utils.clickButtonByRoleAndName("button", "Continue");
  await utils.clickButtonByRoleAndName("link", "Encounters");
  await utils.click("#searchMenuItem");
}

export async function searchbySurname(page) {
  const utils = new UtilityMethods(page);
  await utils.click("#UnMaskedValue_SearchDetailsModel_Surname");
  await utils.locateFill(
    "#UnMaskedValue_SearchDetailsModel_Surname",
    process.env.PLAYWRIGHT_SURNAME
  );
  await utils.clickButtonByRoleAndName("button", "Search");
  await utils.clickButtonByRoleAndName("link", process.env.PLAYWRIGHT_FOLDERNO);
  await utils.clickButtonByRoleAndName("button", "Continue");
  await utils.clickButtonByRoleAndName("link", "Medicines");
  await utils.click("#searchMenuItem");
}

export async function searchbyFirstname(page) {
  const utils = new UtilityMethods(page);
  await utils.click("#UnMaskedValue_SearchDetailsModel_FirstName");
  await utils.locateFill(
    "#UnMaskedValue_SearchDetailsModel_FirstName",
    process.env.PLAYWRIGHT_FIRSTNAME
  );
  await utils.clickButtonByRoleAndName("button", "Search");
  await utils.clickButtonByRoleAndName("link", process.env.PLAYWRIGHT_FOLDERNO);
  await utils.clickButtonByRoleAndName("button", "Continue");
  await utils.page.waitForTimeout(1000);
  await utils.click("#searchMenuItem");
}

export async function searchbyDOB(page) {
  const utils = new UtilityMethods(page);
  await utils.fillInputByPlaceholder("yyyy-mm-dd", process.env.PLAYWRIGHT_DOB);
  await utils.clickButtonByRoleAndName("button", "Search");
  await utils.clickButtonByRoleAndName("link", process.env.PLAYWRIGHT_FOLDERNO);
  await utils.clickButtonByRoleAndName("button", "Continue");
  await utils.page.waitForTimeout(1000);
}

export async function quickSearch(page) {
  const utils = new UtilityMethods(page);
  await utils.click("#generalSearch");
  await utils.locateFill("#generalSearch", process.env.PLAYWRIGHT_FOLDERNO);
  await utils.page.getByPlaceholder("Search Folder").press("Enter");
  await utils.clickButtonByRoleAndName("link", process.env.PLAYWRIGHT_FOLDERNO);
  await utils.clickButtonByRoleAndName("button", "Continue");
  await utils.click("#searchMenuItem");
}

export async function recentPatient(page) {
  const utils = new UtilityMethods(page);
  await utils.clickButtonByRoleAndName("tab", "Recent Patients");
  await utils.clickButtonByRoleAndName("link", process.env.PLAYWRIGHT_FOLDERNO);
  await utils.clickButtonByRoleAndName("button", "Continue");
}

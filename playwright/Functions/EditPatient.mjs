import UtilityMethods from "../utilities/UtilityMethods.mjs";

export async function EditPatient(page) {
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
  await utils.page.waitForTimeout(3000);
  await utils.click('//*[@id="kt_table_1"]/tbody/tr/td[1]/a');
  await utils.clickButtonByRoleAndName("button", "Continue");
  await utils.page.waitForTimeout(1000);
  await utils.click('//*[@id="patient-heading"]/div/div/button');
  await utils.click('//*[@id="patient-heading"]/div/div/div/a');
  await utils.click("#FirstName");
  await utils.locateFill(
    "#FirstName",
    process.env.PLAYWRIGHT_EDITATIENTFIRSTNAME
  );
  await utils.click("#Surname");
  await utils.locateFill(
    "#Surname",
    process.env.PLAYWRIGHT_EDITPATIENTLASTNAME
  );

  await utils.click("#IdNumber");
  await utils.locateFill("#IdNumber", process.env.PLAYWRIGHT_EDITPATIENTIDNO);
  await utils.page
    .locator("#Sex")
    .selectOption(process.env.PLAYWRIGHT_EDITPATIENTSEX);
  await utils.locateFill("#DateOfBirth", process.env.PLAYWRIGHT_EDITPATIENTDOB);
  await utils.clickButtonByRoleAndName("button", "Submit");
}

export async function EditPatientViaPatientAdmin(page) {
  const utils = new UtilityMethods(page);
  await utils.goTo(process.env.PLAYWRIGHT_TARGET_URL);
  await utils.click("#UnMaskedValue_SearchDetailsModel_FirstName");
  await utils.locateFill(
    "#UnMaskedValue_SearchDetailsModel_FirstName",
    process.env.PLAYWRIGHT_EDITATIENTFIRSTNAME
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
  await utils.click("#kt_aside_toggler");
  await utils.clickButtonByRoleAndName("link", " Patient Admin");
  await utils.click('//*[@id="patient-heading"]/div/div/button');
  await utils.click('//*[@id="patient-heading"]/div/div/div/a');
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
  await utils.clickButtonByRoleAndName("button", "Submit");
}

import UtilityMethods from "../utilities/UtilityMethods.mjs";

class EditPatientPage extends UtilityMethods {
  async EditPatient() {
    await this.goTo(process.env.PLAYWRIGHT_TARGET_URL);
    await this.click("#UnMaskedValue_SearchDetailsModel_FirstName");
    await this.locateFill(
      "#UnMaskedValue_SearchDetailsModel_FirstName",
      process.env.PLAYWRIGHT_ADDPATIENTFIRSTNAME
    );
    await this.click("#UnMaskedValue_SearchDetailsModel_Surname");
    await this.locateFill(
      "#UnMaskedValue_SearchDetailsModel_Surname",
      process.env.PLAYWRIGHT_ADDPATIENTLASTNAME
    );
    await this.clickButtonByRoleAndName("button", "Search");
    await this.page.waitForTimeout(3000);
    await this.click('//*[@id="kt_table_1"]/tbody/tr/td[1]/a');
    await this.clickButtonByRoleAndName("button", "Continue");
    await this.page.waitForTimeout(1000);
    await this.click('//*[@id="patient-heading"]/div/div/button');
    await this.click('//*[@id="patient-heading"]/div/div/div/a');
    await this.click("#FirstName");
    await this.locateFill(
      "#FirstName",
      process.env.PLAYWRIGHT_EDITATIENTFIRSTNAME
    );
    await this.click("#Surname");
    await this.locateFill(
      "#Surname",
      process.env.PLAYWRIGHT_EDITPATIENTLASTNAME
    );

    await this.click("#IdNumber");
    await this.locateFill("#IdNumber", process.env.PLAYWRIGHT_EDITPATIENTIDNO);
    await this.page
      .locator("#Sex")
      .selectOption(process.env.PLAYWRIGHT_EDITPATIENTSEX);
    await this.locateFill(
      "#DateOfBirth",
      process.env.PLAYWRIGHT_EDITPATIENTDOB
    );
    await this.clickButtonByRoleAndName("button", "Submit");
  }

  async EditPatientViaPatientAdmin() {
    await this.goTo(process.env.PLAYWRIGHT_TARGET_URL);
    await this.click("#UnMaskedValue_SearchDetailsModel_FirstName");
    await this.locateFill(
      "#UnMaskedValue_SearchDetailsModel_FirstName",
      process.env.PLAYWRIGHT_EDITATIENTFIRSTNAME
    );
    await this.click("#UnMaskedValue_SearchDetailsModel_Surname");
    await this.locateFill(
      "#UnMaskedValue_SearchDetailsModel_Surname",
      process.env.PLAYWRIGHT_ADDPATIENTLASTNAME
    );
    await this.clickButtonByRoleAndName("button", "Search");
    await this.clickButtonByRoleAndName(
      "link",
      process.env.PLAYWRIGHT_ADDPATIENTFOLDERNO
    );
    await this.clickButtonByRoleAndName("button", "Continue");
    await this.click("#kt_aside_toggler");
    await this.clickButtonByRoleAndName("link", " Patient Admin");
    await this.click('//*[@id="patient-heading"]/div/div/button');
    await this.click('//*[@id="patient-heading"]/div/div/div/a');
    await this.click("#FirstName");
    await this.locateFill(
      "#FirstName",
      process.env.PLAYWRIGHT_ADDPATIENTFIRSTNAME
    );
    await this.click("#Surname");
    await this.locateFill(
      "#Surname",
      process.env.PLAYWRIGHT_ADDPATIENTLASTNAME
    );

    await this.click("#IdNumber");
    await this.locateFill("#IdNumber", process.env.PLAYWRIGHT_ADDPATIENTIDNO);
    await this.page
      .locator("#Sex")
      .selectOption(process.env.PLAYWRIGHT_ADDPATIENTSEX);
    await this.locateFill("#DateOfBirth", process.env.PLAYWRIGHT_ADDPATIENTDOB);
    await this.clickButtonByRoleAndName("button", "Submit");
  }
}
export default EditPatientPage;

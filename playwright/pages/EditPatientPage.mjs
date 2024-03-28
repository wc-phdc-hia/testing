import UtilityMethods from "../utilities/UtilityMethods.mjs";

class EditPatientPage extends UtilityMethods {
  constructor(page) {
    super(page);
    // Define selectors or other properties specific to the labs page if needed
  }

  async EditPatient() {
    await this.goTo(process.env.PLAYWRIGHT_TARGET_URL);
    await this.click("#UnMaskedValue_SearchDetailsModel_FirstName");
    await this.locateFill(
      "#UnMaskedValue_SearchDetailsModel_FirstName",
      process.env.PLAYWRIGHT_DELETEPATIENTFIRSTNAME
    );
    await this.clickButtonByRoleAndName("button", "Search");
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
    await this.page.waitForTimeout(3000);
    await this.clickButtonByRoleAndName("button", "Submit");
  }

  async EditPatientViaPatientAdmin() {
    await this.goTo(process.env.PLAYWRIGHT_TARGET_URL);
    await this.click("#UnMaskedValue_SearchDetailsModel_FirstName");
    await this.locateFill(
      "#UnMaskedValue_SearchDetailsModel_FirstName",
      process.env.PLAYWRIGHT_EDITATIENTFIRSTNAME
    );
    await this.clickButtonByRoleAndName("button", "Search");
    await this.click('//*[@id="kt_table_1"]/tbody/tr/td[1]/a');
    await this.clickButtonByRoleAndName("button", "Continue");
    await this.page.waitForTimeout(1000);

    await this.click("#kt_aside_toggler");
    await this.clickButtonByRoleAndName("link", " Patient Admin");
    await this.page.waitForTimeout(1000);
    await this.click('//*[@id="patient-heading"]/div/div/button');
    await this.click('//*[@id="patient-heading"]/div/div/div/a');

    await this.page.waitForTimeout(2000);
    await this.click("#FirstName");
    await this.locateFill(
      "#FirstName",
      process.env.PLAYWRIGHT_EDITATIENTVIAPATIENTADMINFIRSTNAME
    );
    await this.click("#Surname");
    await this.locateFill(
      "#Surname",
      process.env.PLAYWRIGHT_EDITPATIENTVIAPATIENTADMINLASTNAME
    );

    await this.click("#IdNumber");
    await this.locateFill(
      "#IdNumber",
      process.env.PLAYWRIGHT_EDITPATIENTVIAPATIENTADMINIDNO
    );
    await this.page
      .locator("#Sex")
      .selectOption(process.env.PLAYWRIGHT_EDITPATIENTVIAPATIENTADMINSEX);
    await this.locateFill(
      "#DateOfBirth",
      process.env.PLAYWRIGHT_EDITPATIENVIAPATIENTADMINTDOB
    );
    await this.page.waitForTimeout(3000);
    await this.clickButtonByRoleAndName("button", "Submit");
  }
}
export default EditPatientPage;

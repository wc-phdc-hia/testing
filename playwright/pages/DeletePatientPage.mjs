import UtilityMethods from "../utilities/UtilityMethods.mjs";

class DeletePatientPage extends UtilityMethods {
  constructor(page) {
    super(page);
    // Define selectors or other properties specific to the labs page if needed
  }

  async DeletePatient() {
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
    await this.page.waitForTimeout(2000);
    await this.click('//*[@id="patient-heading"]/div/div/div/button');
    await this.page
      .locator("#form-add-attachment")
      .getByRole("button", { name: "Delete" })
      .click();
    await this.page.waitForTimeout(2000);
  }
}
export default DeletePatientPage;

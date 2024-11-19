import UtilityMethods from "../utilities/UtilityMethods.mjs";

export class AddNewPatientPage extends UtilityMethods {
  async AddPatient() {
    await this.goTo(process.env.PLAYWRIGHT_TARGET_URL);
    await this.page.waitForSelector(
      "#UnMaskedValue_SearchDetailsModel_ClinicomNumber",
      { state: "visible" }
    );
    await this.click("#UnMaskedValue_SearchDetailsModel_ClinicomNumber");
    await this.locateFill(
      "#UnMaskedValue_SearchDetailsModel_ClinicomNumber",
      process.env.PLAYWRIGHT_ADDPATIENTFOLDERNO
    );
    await this.clickButtonByRoleAndName("button", "Search");
    await this.clickButtonByRoleAndName("link", "Add Patient");
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
    await this.page.waitForTimeout(3000);
    await this.clickButtonByRoleAndName("button", "Submit");
  }
}
export default AddNewPatientPage;

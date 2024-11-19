import UtilityMethods from "../utilities/UtilityMethods.mjs";

class DeletePatientViaPatientAdminPage extends UtilityMethods {
  async DeletePatientViaPatientAdmin() {
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
    await this.clickButtonByRoleAndName(
      "link",
      process.env.PLAYWRIGHT_ADDPATIENTFOLDERNO
    );
    await this.clickButtonByRoleAndName("button", "Continue");
    await this.click("#kt_aside_toggler");
    await this.clickButtonByRoleAndName("link", " Patient Admin");
    await this.clickButtonByRoleAndName("button", "Actions");
    await this.clickButtonByRoleAndName("button", "Delete");
  }
}
export default DeletePatientViaPatientAdminPage;

import UtilityMethods from "../utilities/UtilityMethods.mjs";

class EditUserPage extends UtilityMethods {
  constructor(page) {
    super(page);
    // Define selectors or other properties specific to the labs page if needed
  }

  // This below method for Editing the user

  async Edituser() {
    await this.goTo(process.env.PLAYWRIGHT_TARGET_URL);
    await this.click("#kt_aside_toggler");
    await this.clickButtonByRoleAndName("link", " Settings");
    await this.clickButtonByRoleAndName("link", "List OpenIHP Users");
    await this.click('//*[@id="row00jqxgrid"]/div[2]');
    await this.type(
      '//*[@id="row00jqxgrid"]/div[2]',
      process.env.PLAYWRIGHT_EDITUSERUSERNAME
    );
    await this.page.locator('//*[@id="row00jqxgrid"]/div[2]').press("Enter");
    await this.page.waitForTimeout(5000);
    await this.click('//*[@id="row0jqxgrid"]/div[9]/div/a[1]');
    await this.locateFill(
      "#FirstName",
      process.env.PLAYWRIGHT_EDITUSERFIRSTNAME
    );
    await this.click("#Surname");
    await this.locateFill("#Surname", process.env.PLAYWRIGHT_EDITUSERLASTNAME);
    await this.click("#Qualification");
    await this.locateFill(
      "#Qualification",
      process.env.PLAYWRIGHT_Qualification
    );
    await this.click("#PrimaryPlaceOfWork");
    await this.locateFill(
      "#PrimaryPlaceOfWork",
      process.env.PLAYWRIGHT_EDITUSERPLACEOFWORK
    );
    await this.page.waitForTimeout(5000);
    await this.click("#saveUser");
  }
}
 export default EditUserPage;

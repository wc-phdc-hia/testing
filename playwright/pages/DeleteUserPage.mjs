import UtilityMethods from "../utilities/UtilityMethods.mjs";

class DeleteUserPage extends UtilityMethods {
  // This below method for Delete the user

  async DeleteUser() {
    await this.goTo(process.env.PLAYWRIGHT_TARGET_URL);
    await this.click("#kt_aside_toggler");
    await this.clickButtonByRoleAndName("link", " Settings");
    await this.page.pause();
    await this.clickButtonByRoleAndName("link", "List OpenIHP Users");
    await this.click('//*[@id="row00jqxgrid"]/div[2]');
    await this.type(
      '//*[@id="row00jqxgrid"]/div[2]',
      process.env.PLAYWRIGHT_DELETEUSERUSERNAME
    );
    await this.page.locator('//*[@id="row00jqxgrid"]/div[2]').press("Enter");
    await this.clickButtonByRoleAndName("button", "Delete User");
  }
}
export default DeleteUserPage;

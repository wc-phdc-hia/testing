import  UtilityMethods from '../utilities/UtilityMethods.mjs';

export class ChangePwdPage extends UtilityMethods {
  constructor(page) {
    super(page);
  }

  // This below method for changing the existing user pwd

  async ChangePwd() {
    await this.goTo(process.env.PLAYWRIGHT_TARGET_URL);
    await this.click("#kt_aside_toggler");
    await this.clickButtonByRoleAndName("link", " Settings");
    await this.clickButtonByRoleAndName("link", "List OpenIHP Users");
    await this.click('//*[@id="row00jqxgrid"]/div[2]');
    await this.type(
      '//*[@id="row00jqxgrid"]/div[2]',
      process.env.PLAYWRIGHT_CHANGEUSERUSERNAME
    );
    await this.page.locator('//*[@id="row00jqxgrid"]/div[2]').press("Enter");
    await this.page.waitForTimeout(5000);
    await this.click("#row0jqxgrid > div:nth-child(9) > div > a:nth-child(5)");
    await this.click("#NewPassword");
    await this.locateFill(
      "#NewPassword",
      process.env.PLAYWRIGHT_CHANGEUSERNEWPWD
    );
    await this.click("#ConfirmPassword");
    await this.locateFill(
      "#ConfirmPassword",
      process.env.PLAYWRIGHT_CHANGEUSERNEWPWD
    );
    await this.clickButtonByRoleAndName("button", "Change Password");
  }
}
 

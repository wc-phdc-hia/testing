import UtilityMethods from "../utilities/UtilityMethods.mjs";

export class ChangePwdPage extends UtilityMethods {
  async ChangePwd() {
    await this.goTo(process.env.PLAYWRIGHT_TARGET_URL);
    await this.click("#kt_aside_toggler");
    await this.clickButtonByRoleAndName("link", " Settings");
    await this.clickButtonByRoleAndName("link", "List OpenIHP Users");
    await this.click('a[href="/User/ChangePassword?id=21037"]');
    await this.page.waitForTimeout(5000);
    await this.click("#NewPassword");
    await this.locateFill(
      "#NewPassword",
      process.env.PLAYWRIGHT_CHANGEUSERPASSWORD
    );
    await this.click("#ConfirmPassword");
    await this.locateFill(
      "#ConfirmPassword",
      process.env.PLAYWRIGHT_CHANGEUSERPASSWORD
    );
    await this.clickButtonByRoleAndName("button", "Change Password");
  }
}

export default ChangePwdPage;

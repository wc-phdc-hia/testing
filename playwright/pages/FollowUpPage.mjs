import UtilityMethods from "../utilities/UtilityMethods.mjs";

class FollowUpPage extends UtilityMethods {
  async gotoFollowUpPage() {
    await this.goTo(process.env.PLAYWRIGHT_TARGET_URL);
    await this.click("#UnMaskedValue_SearchDetailsModel_ClinicomNumber");
    await this.locateFill(
      "#UnMaskedValue_SearchDetailsModel_ClinicomNumber",
      process.env.PLAYWRIGHT_FOLDERNO
    );
    await this.clickButtonByRoleAndName("button", "Search");
    await this.clickButtonByRoleAndName(
      "link",
      process.env.PLAYWRIGHT_FOLDERNO
    );
    await this.clickButtonByRoleAndName("button", "Continue");
    await this.click("#kt_aside_toggler");
    await this.click('span.kt-menu__link-text:has-text("Follow-ups")');
    await this.clickButtonByRoleAndName("button", "Create Follow-up ");
    await this.clickButtonByRoleAndName("link", "Create General Note");
    await this.selectOptionByRole("combobox", "Health condition", "Pregnancy");
    await this.selectOptionByRole("combobox", "Status", "Resolved");
    await this.selectOptionByRole("combobox", "Follow-up Action", "Other");
    await this.clickElementById("Notes");
    await this.fillInputById("Notes", "Testing");
    await this.clickButtonByRoleAndName("button", "Create");
    await this.page.waitForTimeout(1000);
  }
}

export default FollowUpPage;

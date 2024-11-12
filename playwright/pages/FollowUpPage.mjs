import UtilityMethods from "../utilities/UtilityMethods.mjs";

class FollowUpPage extends UtilityMethods {
  constructor(page) {
    super(page);
    // Define selectors or other properties specific to the labs page if needed
  }
  // This below method for Redirecting the user to Medicines Page checking filters

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
    await this.clickButtonByRoleAndName("button", "Create Follow Up ");
    await this.clickButtonByRoleAndName("link", "Create General Note");
    await page.getByRole('combobox', { name: 'Health condition' }).selectOption('Pregnancy');
    await page.getByRole('combobox', { name: 'Status' }).selectOption('Resolved');
    await page.getByRole('combobox', { name: 'Follow-up Action' }).selectOption('Other');
    await page.getByLabel('Notes').click();
    await page.getByLabel('Notes').fill('Testing');
    await this.clickButtonByRoleAndName("button", "Create");
    await this.page.waitForTimeout(1000);
  }
}

 export default FollowUpPage;

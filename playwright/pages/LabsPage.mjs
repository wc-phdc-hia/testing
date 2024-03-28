import UtilityMethods from "../utilities/UtilityMethods.mjs";

class LabsPage extends UtilityMethods {
  constructor(page) {
    super(page);
    // Define selectors or other properties specific to the labs page if needed
  }
  // This below method for Redirecting the user to Labs Page checking filters

  async gotoLabsPage() {
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
    await this.click('span.kt-menu__link-text:has-text("Labs")');
    await this.page.waitForTimeout(3000);
    await this.click("#whitelist-on");
    await this.click("#whitelist-off");
    await this.click("#filter-on");
    await this.page.waitForTimeout(3000);
    await this.page
      .getByRole("treeitem", { name: process.env.PLAYWRIGHT_LABSCODE1 })
      .getByRole("checkbox")
      .click();
    await this.clickButtonByRoleAndName("link", "Filter");
    await this.click("#filter-off");
    await this.clickButtonByRoleAndName("button", "BY TEST");
    await this.page
      .getByRole("treeitem", { name: process.env.PLAYWRIGHT_LABSCODE2 })
      .getByRole("checkbox")
      .click();
    await this.clickButtonByRoleAndName("link", "Filter");
    await this.click("#pivot-off");
    await this.page.waitForTimeout(3000);
    await this.clickButtonByRoleAndName("button", "BY DATE");
    await this.click("#pivot-off");
  }
}

export default LabsPage;

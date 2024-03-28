import UtilityMethods from "../utilities/UtilityMethods.mjs";

class MedicinesPage extends UtilityMethods {
  constructor(page) {
    super(page);
    // Define selectors or other properties specific to the labs page if needed
  }
  // This below method for Redirecting the user to Medicines Page checking filters

  async gotoMedicinesPage() {
    // medicines page
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
    await this.click('span.kt-menu__link-text:has-text("Medicines")');
    await this.page.waitForTimeout(3000);
    const elementLocator = this.page.locator("#filter-on");
    await elementLocator.waitFor({ state: "visible" });
    await elementLocator.click();
    await this.page
      .getByRole("treeitem", { name: process.env.PLAYWRIGHT_MEDICINECODE1 })
      .getByRole("checkbox")
      .click();
    await this.clickButtonByRoleAndName("link", "Filter");
    await this.click("#filter-off");
    await this.click("#pivot-drug-on");
    await this.page
      .getByRole("treeitem", { name: process.env.PLAYWRIGHT_MEDICINECODE2 })
      .getByRole("checkbox")
      .click();
    await this.clickButtonByRoleAndName("link", "Filter");
  }
}

 export default MedicinesPage;

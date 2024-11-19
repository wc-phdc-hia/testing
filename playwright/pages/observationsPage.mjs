import UtilityMethods from "../utilities/UtilityMethods.mjs";

class ObservationsPage extends UtilityMethods {
  async Observations() {
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
    await this.click('span.kt-menu__link-text:has-text("Observations")');
    await this.clickButtonByRoleAndName("heading", "Filter");
    await this.clickButtonByRoleAndName("button", "ON");
    // await page.getByRole("heading", { name: "Filter" }).click();
    // await page.getByRole("button", { name: "ON" }).click();

    await this.page
      .getByRole("treeitem", { name: process.env.PLAYWRIGHT_OBSERVATIONITEM })
      .locator("span")
      .nth(3)
      .click();
    await this.clickButtonByRoleAndName("link", "Filter");
    // await page.getByRole("link", { name: "Filter" }).click();
  }
}
export default ObservationsPage;

import UtilityMethods from "../utilities/UtilityMethods.mjs";

class EncountersPage extends UtilityMethods {
  async EncountersPage() {
    // Encounters page
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
    await this.clickButtonByRoleAndName("link", "Encounters");
    // Eye icon leads to encounter details
    const viewDetailsLocator = this.page
      .locator('a.btn[data-original-title="View encounter details"]')
      .first();
    await viewDetailsLocator.click();
  }
}
export default EncountersPage;

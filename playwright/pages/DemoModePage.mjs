import UtilityMethods from "../utilities/UtilityMethods.mjs";

class DemoModePage extends UtilityMethods {
  // Patient
  async DemoMode() {
    // demo mode
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
    await this.click('span.kt-menu__link-text:has-text("Inferred Episodes")');
    // Eye icon leads to inferred episodes details
    await this.clickIcon(
      'a.btn.btn-info.btn-elevate.btn-circle.btn-icon[data-original-title="View episode characteristics"]'
    );
  }
}

export default DemoModePage;

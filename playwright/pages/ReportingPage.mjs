import UtilityMethods from "../utilities/UtilityMethods.mjs";

class ReportingPage extends UtilityMethods {
  async ReportingPage() {
    await this.goTo(process.env.PLAYWRIGHT_TARGET_URL);
    await this.click("#kt_aside_toggler");
    await this.click('span.kt-menu__link-text:has-text("Reports")');
    await this.page.locator("#Cat7 > a").click();
    await this.page.locator("#Cat9 > a").click();
    await this.page.locator("#Cat38").getByRole("link").click();
  }
}
export default ReportingPage;

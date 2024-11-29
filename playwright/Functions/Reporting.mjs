import UtilityMethods from "../utilities/UtilityMethods.mjs";

export async function Reporting(page) {
  const utils = new UtilityMethods(page);

  await utils.goTo(process.env.PLAYWRIGHT_TARGET_URL);
  await utils.click("#kt_aside_toggler");
  await utils.click('span.kt-menu__link-text:has-text("Reports")');
  await utils.page.locator("#Cat7 > a").click();
  await utils.page.locator("#Cat9 > a").click();
  await utils.page.locator("#Cat38").getByRole("link").click();
}

import UtilityMethods from "../utilities/UtilityMethods.mjs";

export async function ChangePassword(page) {
  const utils = new UtilityMethods(page);

  await utils.goTo(process.env.PLAYWRIGHT_TARGET_URL);
  await utils.click("#kt_aside_toggler");
  await utils.clickButtonByRoleAndName("link", " Settings");
  await utils.clickButtonByRoleAndName("link", "List OpenIHP Users");
  await utils.click('a[href="/User/ChangePassword?id=21037"]');
  await utils.page.waitForTimeout(5000);
  await utils.click("#NewPassword");
  await utils.locateFill(
    "#NewPassword",
    process.env.PLAYWRIGHT_CHANGEUSERPASSWORD
  );
  await utils.click("#ConfirmPassword");
  await utils.locateFill(
    "#ConfirmPassword",
    process.env.PLAYWRIGHT_CHANGEUSERPASSWORD
  );
  await utils.clickButtonByRoleAndName("button", "Change Password");
}

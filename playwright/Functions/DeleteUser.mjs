import UtilityMethods from "../utilities/UtilityMethods.mjs";

export async function DeleteUser(page) {
  const utils = new UtilityMethods(page);

  await utils.goTo(process.env.PLAYWRIGHT_TARGET_URL);
  await utils.click("#kt_aside_toggler");
  await utils.clickButtonByRoleAndName("link", " Settings");
  await utils.clickButtonByRoleAndName("link", "List OpenIHP Users");
  await utils.click('//*[@id="row00jqxgrid"]/div[2]');
  await utils.type(
    '//*[@id="row00jqxgrid"]/div[2]',
    process.env.PLAYWRIGHT_DELETEUSERUSERNAME
  );
  await utils.page.locator('//*[@id="row00jqxgrid"]/div[2]').press("Enter");
  await utils.clickButtonByRoleAndName("button", "Delete User");
}

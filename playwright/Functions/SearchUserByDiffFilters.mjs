import UtilityMethods from "../utilities/UtilityMethods.mjs";
// utils below Methods for Searching the User Based on Different Criteria

export async function SearchByUserName(page) {
  const utils = new UtilityMethods(page);
  await utils.goTo(process.env.PLAYWRIGHT_TARGET_URL);
  await utils.click("#kt_aside_toggler");
  await utils.clickButtonByRoleAndName("link", " Settings");
  await utils.clickButtonByRoleAndName("link", "List OpenIHP Users");
  await utils.click('//*[@id="row00jqxgrid"]/div[2]');
  await utils.type(
    '//*[@id="row00jqxgrid"]/div[2]',
    process.env.PLAYWRIGHT_SEARCHUSERBYUSERNAME
  );
  await utils.page.locator('//*[@id="row00jqxgrid"]/div[2]').press("Enter");
  await utils.page.waitForTimeout(1000);
}

export async function SearchByFirstName(page) {
  const utils = new UtilityMethods(page);
  await utils.goTo(process.env.PLAYWRIGHT_TARGET_URL);
  await utils.click("#kt_aside_toggler");
  await utils.clickButtonByRoleAndName("link", " Settings");
  await utils.clickButtonByRoleAndName("link", "List OpenIHP Users");
  await utils.click('//*[@id="row00jqxgrid"]/div[3]');
  await utils.type(
    '//*[@id="row00jqxgrid"]/div[3]',
    process.env.PLAYWRIGHT_SEARCHUSERBYFIRSTNAME
  );
  await utils.page.locator('//*[@id="row00jqxgrid"]/div[3]').press("Enter");
  await utils.page.waitForTimeout(1000);
}

export async function SearchByLastName(page) {
  const utils = new UtilityMethods(page);
  await utils.goTo(process.env.PLAYWRIGHT_TARGET_URL);
  await utils.click("#kt_aside_toggler");
  await utils.clickButtonByRoleAndName("link", " Settings");
  await utils.clickButtonByRoleAndName("link", "List OpenIHP Users");
  await utils.click('//*[@id="row00jqxgrid"]/div[4]');
  await utils.type(
    '//*[@id="row00jqxgrid"]/div[4]',
    process.env.PLAYWRIGHT_SEARCHUSERBYLASTNAME
  );
  await utils.page.locator('//*[@id="row00jqxgrid"]/div[4]').press("Enter");
  await utils.page.waitForTimeout(1000);
}

export async function SearchByEmail(page) {
  const utils = new UtilityMethods(page);
  await utils.goTo(process.env.PLAYWRIGHT_TARGET_URL);
  await utils.click("#kt_aside_toggler");
  await utils.clickButtonByRoleAndName("link", " Settings");
  await utils.clickButtonByRoleAndName("link", "List OpenIHP Users");
  await utils.click('//*[@id="row00jqxgrid"]/div[5]');
  await utils.type(
    '//*[@id="row00jqxgrid"]/div[5]',
    process.env.PLAYWRIGHT_SEARCHUSERBYEMAIL
  );
  await utils.page.locator('//*[@id="row00jqxgrid"]/div[5]').press("Enter");
  await utils.page.waitForTimeout(1000);
}

export async function SearchByType(page) {
  const utils = new UtilityMethods(page);
  await utils.goTo(process.env.PLAYWRIGHT_TARGET_URL);
  await utils.click("#kt_aside_toggler");
  await utils.clickButtonByRoleAndName("link", " Settings");
  await utils.clickButtonByRoleAndName("link", "List OpenIHP Users");
  await utils.click('//*[@id="row00jqxgrid"]/div[6]');
  await utils.type(
    '//*[@id="row00jqxgrid"]/div[6]',
    process.env.PLAYWRIGHT_SEARCHUSERBYTYPE
  );
  await utils.page.locator('//*[@id="row00jqxgrid"]/div[6]').press("Enter");
  await utils.page.waitForTimeout(1000);
}

export async function SearchByLastLogin(page) {
  const utils = new UtilityMethods(page);
  await utils.goTo(process.env.PLAYWRIGHT_TARGET_URL);
  await utils.click("#kt_aside_toggler");
  await utils.clickButtonByRoleAndName("link", " Settings");
  await utils.clickButtonByRoleAndName("link", "List OpenIHP Users");
  await utils.click('//*[@id="row00jqxgrid"]/div[7]');
  await utils.type(
    '//*[@id="row00jqxgrid"]/div[7]',
    process.env.PLAYWRIGHT_SEARCHUSERBYLASTLOGIN
  );
  await utils.page.locator('//*[@id="row00jqxgrid"]/div[7]').press("Enter");
  await utils.page.waitForTimeout(1000);
}

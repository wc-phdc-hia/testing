import UtilityMethods from "../utilities/UtilityMethods.mjs";

export async function CreateUser(page) {
  const utils = new UtilityMethods(page);

  await utils.goTo(process.env.PLAYWRIGHT_TARGET_URL);
  await utils.click("#kt_aside_toggler");
  await utils.clickButtonByRoleAndName("link", " Settings");
  await utils.clickButtonByRoleAndName("link", "New OpenIHP User");
  await utils.click("#UserName");
  await utils.locateFill(
    "#UserName",
    process.env.PLAYWRIGHT_CREATEUSERUSERNAME
  );
  await utils.click("#FirstName");
  await utils.locateFill(
    "#FirstName",
    process.env.PLAYWRIGHT_CREATEUSERFIRSTNAME
  );
  await utils.click("#Surname");
  await utils.locateFill("#Surname", process.env.PLAYWRIGHT_CREATEUSERLASTNAME);
  await utils.click("#Email");
  await utils.locateFill("#Email", process.env.PLAYWRIGHT_CREATEUSEREMAIL);
  await utils.click("#PrimaryPlaceOfWork");
  await utils.locateFill(
    "#PrimaryPlaceOfWork",
    process.env.PLAYWRIGHT_PLACEOFWORK
  );
  await utils.click("#LineManagerName");
  await utils.locateFill(
    "#LineManagerName",
    process.env.PLAYWRIGHT_LINEMANAGERNAME
  );
  await utils.click("#LineManagerSurname");
  await utils.locateFill(
    "#LineManagerSurname",
    process.env.PLAYWRIGHT_LINEMANAGERSURNAME
  );
  await utils.clickByText("label", process.env.PLAYWRIGHT_USERWORKFLOW);
  await utils.getByText("Inactive", true);

  await utils.click("#passwordInput");
  await utils.locateFill(
    "#passwordInput",
    process.env.PLAYWRIGHT_CREATEUSERPASSWORD
  );
  await utils.click("#saveUser");
}

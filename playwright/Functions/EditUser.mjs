import UtilityMethods from "../utilities/UtilityMethods.mjs";

export async function EditUser(page) {
  const utils = new UtilityMethods(page);

  await utils.goTo(process.env.PLAYWRIGHT_TARGET_URL);
  await utils.click("#kt_aside_toggler");
  await utils.clickButtonByRoleAndName("link", " Settings");
  await utils.clickButtonByRoleAndName("link", "List OpenIHP Users");
  await utils.click('a[href="/User/Edit?id=21037"]');
  await utils.click("#UserName");
  await utils.locateFill("#UserName", process.env.PLAYWRIGHT_EDITUSERUSERNAME);
  await utils.click("#FirstName");
  await utils.locateFill(
    "#FirstName",
    process.env.PLAYWRIGHT_EDITUSERFIRSTNAME
  );
  await utils.click("#Surname");
  await utils.locateFill("#Surname", process.env.PLAYWRIGHT_EDITUSERLASTNAME);
  await utils.click("#Qualification");
  await utils.locateFill(
    "#Qualification",
    process.env.PLAYWRIGHT_QUALIFICATION
  );
  await utils.click("#PrimaryPlaceOfWork");
  await utils.locateFill(
    "#PrimaryPlaceOfWork",
    process.env.PLAYWRIGHT_EDITUSERPLACEOFWORK
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

  await utils.selectDropdownOption("#ClinicianCategoryId.form-control", "2");

  await utils.clickButtonByRoleAndName("button", "Assign Facilities");

  await utils.clickNthCheckbox("#facilityTree span.fancytree-checkbox", 0);

  const ariaSelectedValue = await utils.getAttribute(
    "li.fancytree-lastsib",
    "aria-selected"
  );

  if (ariaSelectedValue === "false") {
    await utils.clickNthCheckbox("#facilityTree span.fancytree-checkbox", 0);
  }

  await utils.clickButtonByRoleAndName("button", "Confirm");

  await utils.page.waitForTimeout(5000);
  await utils.click("#saveUser");
}

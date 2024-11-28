import UtilityMethods from "../utilities/UtilityMethods.mjs";

class EditUserPage extends UtilityMethods {
  // This below method for Editing the user

  async Edituser() {
    await this.goTo(process.env.PLAYWRIGHT_TARGET_URL);
    await this.click("#kt_aside_toggler");
    await this.clickButtonByRoleAndName("link", " Settings");
    await this.clickButtonByRoleAndName("link", "List OpenIHP Users");
    await this.click('a[href="/User/Edit?id=21037"]');
    await this.click("#UserName");
    await this.locateFill("#UserName", process.env.PLAYWRIGHT_EDITUSERUSERNAME);
    await this.click("#FirstName");
    await this.locateFill(
      "#FirstName",
      process.env.PLAYWRIGHT_EDITUSERFIRSTNAME
    );
    await this.click("#Surname");
    await this.locateFill("#Surname", process.env.PLAYWRIGHT_EDITUSERLASTNAME);
    await this.click("#Qualification");
    await this.locateFill(
      "#Qualification",
      process.env.PLAYWRIGHT_QUALIFICATION
    );
    await this.click("#PrimaryPlaceOfWork");
    await this.locateFill(
      "#PrimaryPlaceOfWork",
      process.env.PLAYWRIGHT_EDITUSERPLACEOFWORK
    );
    await this.click("#LineManagerName");
    await this.locateFill(
      "#LineManagerName",
      process.env.PLAYWRIGHT_LINEMANAGERNAME
    );
    await this.click("#LineManagerSurname");
    await this.locateFill(
      "#LineManagerSurname",
      process.env.PLAYWRIGHT_LINEMANAGERSURNAME
    );

    await this.clickByText("label", process.env.PLAYWRIGHT_USERWORKFLOW);

    await this.selectDropdownOption("#ClinicianCategoryId.form-control", "2");

    await this.clickButtonByRoleAndName("button", "Assign Facilities");

    await this.clickNthCheckbox("#facilityTree span.fancytree-checkbox", 0);

    const ariaSelectedValue = await this.getAttribute(
      "li.fancytree-lastsib",
      "aria-selected"
    );

    if (ariaSelectedValue === "false") {
      await this.clickNthCheckbox("#facilityTree span.fancytree-checkbox", 0);
    }

    await this.clickButtonByRoleAndName("button", "Confirm");

    await this.page.waitForTimeout(5000);
    await this.click("#saveUser");
  }
}
export default EditUserPage;

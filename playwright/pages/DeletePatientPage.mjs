import UtilityMethods from "../utilities/UtilityMethods.mjs";

class DeletePatientPage extends UtilityMethods {
	constructor(page) {
		super(page);
	}

	async DeletePatient() {
		await this.goTo(process.env.PLAYWRIGHT_TARGET_URL);
		await this.click("#UnMaskedValue_SearchDetailsModel_FirstName");
		await this.locateFill(
			"#UnMaskedValue_SearchDetailsModel_FirstName",
			process.env.PLAYWRIGHT_ADDPATIENTFIRSTNAME,
		);
		await this.click("#UnMaskedValue_SearchDetailsModel_Surname");
		await this.locateFill(
			"#UnMaskedValue_SearchDetailsModel_Surname",
			process.env.PLAYWRIGHT_ADDPATIENTLASTNAME,
		);
		await this.clickButtonByRoleAndName("button", "Search");
		await this.clickButtonByRoleAndName(
			"link",
			process.env.PLAYWRIGHT_ADDPATIENTFOLDERNO
		  );
		await this.clickButtonByRoleAndName("button", "Continue");
		await this.page.waitForTimeout(1000);
		await this.clickButtonByRoleAndName("button", "Actions");
		await this.clickButtonByRoleAndName("button", "Delete");
	}
}
export default DeletePatientPage;

import { test } from "@playwright/test";
// eslint-disable-next-line import/no-named-as-default
import AddNewPatientPage from "../playwright/pages/AddNewPatientPage.mjs";

test.describe("AddNewPatient Tests", () => {
  let page;
  let addNewPatientPage;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    addNewPatientPage = new AddNewPatientPage(page);
  });

  test.afterAll(async () => {
    await page.close();
  });

  // eslint-disable-next-line no-empty-pattern
  test("AddNewPatient test", async ({}, testInfo) => {
    await addNewPatientPage.AddPatient();
    const screenshot = await page.screenshot();
    await testInfo.attach("AddNewPatient test screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  });
});

// import { test, expect } from "@playwright/test";

// const authFile = "playwright/.auth/user.json";
// let page;

// // Load the authenticated state for tests
// test.use({ storageState: authFile });

// test.describe.configure({ mode: "serial" });

// test.beforeAll(async ({ browser }) => {
// 	page = await browser.newPage();
// });

// test.afterAll(async () => {
// 	await page.close();
// });

// test("spv-patient", async () => {
// 	await page.goto("http://localhost:5380/Search");
// 	await page.locator("#UnMaskedValue_SearchDetailsModel_FirstName").click();
// 	await page
// 		.locator("#UnMaskedValue_SearchDetailsModel_FirstName")
// 		.fill("John");
// 	await page.getByRole("button", { name: "Search" }).click();

// 	// Check if patient exists by inspecting the folder number
// 	const folderNumber = "IHP5473565";
// 	const patientLocator = page.locator(`span[data-original="${folderNumber}"]`);
// 	const patientCount = await patientLocator.count();

// 	if (patientCount === 0) {
// 		await page.getByRole("link", { name: "Add Patient" }).click();
// 		await page.getByLabel("Surname").click();
// 		await page.getByLabel("Surname").fill("Doe");
// 		await page.getByPlaceholder("yyyy-mm-dd").click();
// 		await page.getByRole("link", { name: "7", exact: true }).click();
// 		await page.getByRole("combobox", { name: "Sex" }).selectOption("102");
// 		await page.getByLabel("ID Number").click();
// 		await page.getByLabel("ID Number").fill("123456789");
// 		await page.getByRole("button", { name: "Submit" }).click();
// 	}
// });

// // Enabling all facilities
// test("enable facilities", async () => {
// 	await page.waitForTimeout(2000);
// 	await page.locator("#kt_aside_toggler").click();
// 	await page.locator('span.kt-menu__link-text:has-text("Settings")').click();
// 	await page.getByRole("link", { name: "List OpenIHP Users" }).click();
// 	await page.waitForTimeout(2000);
// 	//Edit default user
// 	await page.locator('a[href="/User/Edit?id=21037"]').click();
// 	await page
// 		.locator("label")
// 		.filter({ hasText: "Data Capturer" })
// 		.locator("span")
// 		.click();
// 	const dropdownLocator = await page.waitForSelector(
// 		"#ClinicianCategoryId.form-control",
// 	);
// 	await dropdownLocator.selectOption("2");
// 	await page.getByRole("button", { name: "Assign Facilities" }).click();
// 	const checkbox = await page
// 		.locator("#facilityTree span.fancytree-checkbox")
// 		.nth(0);
// 	const element = await page.waitForSelector("li.fancytree-lastsib");

// 	if (element) {
// 		const ariaSelectedValue = await page.evaluate((element) => {
// 			return element.getAttribute("aria-selected");
// 		}, element);

// 		if (ariaSelectedValue === "false") {
// 			await checkbox.click();
// 		}
// 	}

// 	await page.getByRole("button", { name: "Confirm" }).click();
// 	await page.locator("#Qualification").click();
// 	await page.locator("#Qualification").fill("Medicine");
// 	await page.locator("#RegistrationNumber").click();
// 	await page.locator("#RegistrationNumber").fill("12345678");
// 	await page.locator("#PrimaryPlaceOfWork").click();
// 	await page.locator("#PrimaryPlaceOfWork").fill("Work");
// 	await page.locator("#LineManagerName").click();
// 	await page.locator("#LineManagerName").fill("Tom");
// 	await page.locator("#LineManagerSurname").click();
// 	await page.locator("#LineManagerSurname").fill("Smith");
// 	await page.getByRole("button", { name: "Save User" }).click();
// });

// // Capture some data
// test("first capture", async () => {
// 	await page.getByRole("tab", { name: "Search" }).click();
// 	await page
// 		.locator("#UnMaskedValue_SearchDetailsModel_ClinicomNumber")
// 		.click();
// 	await page
// 		.locator("#UnMaskedValue_SearchDetailsModel_ClinicomNumber")
// 		.fill("106362783");
// 	await page.getByRole("button", { name: "Search" }).click();
// 	await page.getByRole("link", { name: "106362783" }).click();
// 	await page.getByRole("button", { name: "Continue" }).click();
// 	await page.locator("#kt_aside_toggler").click();
// 	await page.locator('span.kt-menu__link-text:has-text("Capture")').click();
// 	await page.getByRole("button", { name: "Datacapturer" }).click();

// 	//Checking to see if there are any records
// 	const messageLocator = await page.textContent("body");
// 	if (messageLocator.includes("There are no records to display")) {
// 		await page.locator("#luEpisodeType").selectOption("6");
// 		await page.getByRole("button", { name: "Add" }).click();
// 		await page.locator("#Extension247").selectOption("801");
// 		await page.locator("#Extension245").click();
// 		await page.getByRole("link", { name: "2", exact: true }).click();
// 		await page.locator("#Extension6").selectOption("201");
// 		await page.locator("#Extension19").selectOption("2301");
// 		await page.locator("#Extension21").selectOption("2501");
// 		await page.locator("#Extension22").selectOption("2601");
// 		await page.getByRole("button", { name: "Save" }).click();
// 	}

// 	await page.getByRole("button", { name: "Next" }).click();
// 	await page.locator("#Extension252").selectOption("501");
// 	await page.locator("#Extension253-input").click();
// 	await page.locator('[id="111_anchor"] .jstree-checkbox').click();
// 	await page
// 		.locator("#Extension253-modal")
// 		.getByRole("button", { name: "Choose" })
// 		.click();
// 	await page.locator("#Extension254").click();
// 	await page.getByRole("combobox").nth(2).selectOption("2043");
// 	await page.getByRole("combobox").nth(1).selectOption("11");
// 	await page.getByRole("link", { name: "31" }).click();
// 	await page.getByRole("button", { name: "Next" }).click();
// 	await page.getByRole("button", { name: "Next" }).click();
// 	await page.getByRole("link", { name: "Summary" }).click();
// 	await page.getByRole("button", { name: "Save" }).click();
// });

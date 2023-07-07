// import { test } from '@playwright/test';

// // test('general test', async ({ page }) => {
// //     await page.goto('http://localhost:5380/search');
// //     await page.locator('#kt_aside_toggler').click();
// //     await page.locator('#kt_aside_toggler').click();
// //     await page.locator('#kt_aside_toggler').click();
// //     // await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').click({button: 'right'});
// //     await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').fill('');
// //     await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').click();
// //     await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').fill('156739427');
// //     await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').press('Enter');
// //     await page.getByRole('tab', { name: 'Patient List' }).click();
// //     await page.getByRole('tab', { name: 'Recent Patients' }).click();
// //     await page.getByPlaceholder('Search Folder').click();
// //     await page.getByPlaceholder('Search Folder').fill('156739427');
// //     await page.getByPlaceholder('Search Folder').press('Enter');
// //     await page.locator('#kt_header_menu span').click();
// //     await page.locator('#kt_header_menu span').click();
// //     await page.locator('#feedback-link').click();
// //     await page.getByPlaceholder('Type in your feedback').click();
// //     await page.getByPlaceholder('Type in your feedback').fill('Testing');
// //     await page.getByRole('button', { name: 'Post feedback' }).click();
// //     await page.goto('http://localhost:5380/Covid19');
// //     await page.pause();
// //     await page.getByRole('link', { name: 'Capture Tools' }).click();
// //     await page.getByRole('link', { name: 'Reporting' }).click();
// //     await page.getByRole('link', { name: 'User Guides' }).click();
// //     await page.getByRole('link', { name: 'Modelling/Tracking Resources' }).click();
// //     await page.pause();
// // });

// test('dashboard test', async ({ page }) => {
//     await page.goto('http://localhost:5380/search');
//     await page.getByPlaceholder('Search Folder').click();
//     await page.getByPlaceholder('Search Folder').fill('156739427');
//     await page.getByPlaceholder('Search Folder').press('Enter');
//     await page.getByRole('link', { name: '156739427' }).click();
//     await page.getByRole('button', { name: 'Continue' }).click();
    
//     await page.getByRole('link', { name: 'Encounters' }).click();
//     await page.getByPlaceholder('Search Folder').click();
//     await page.getByPlaceholder('Search Folder').fill('IHP5473565');
//     await page.getByPlaceholder('Search Folder').press('Enter');
//     await page.getByRole('link', { name: 'IHP5473565' }).click();
//     await page.getByRole('button', { name: 'Continue' }).click();
//     // For IHP folder numbers - Edit Patient Demographics and Submit
//     await page.getByRole('button', { name: 'Actions ' }).click();
//     await page.getByRole('link', { name: 'Edit' }).click();
//     await page.getByLabel('Address Line 1').click();
//     await page.getByLabel('Address Line 1').press('ArrowLeft');
//     await page.getByLabel('Address Line 1').press('ArrowLeft');
//     await page.getByLabel('Address Line 1').press('ArrowLeft');
//     await page.getByLabel('Address Line 1').press('ArrowLeft');
//     await page.getByLabel('Address Line 1').press('ArrowLeft');
//     await page.getByLabel('Address Line 1').press('ArrowLeft');
//     await page.getByLabel('Address Line 1').press('ArrowLeft');
//     await page.getByLabel('Address Line 1').press('ArrowLeft');
//     await page.getByLabel('Address Line 1').press('ArrowLeft');
//     await page.getByLabel('Address Line 1').press('ArrowLeft');
//     await page.getByLabel('Address Line 1').press('ArrowLeft');
//     await page.getByLabel('Address Line 1').press('ArrowLeft');
//     await page.getByLabel('Address Line 1').fill('5 Line Street');
//     await page.getByRole('button', { name: 'Submit' }).click();
//     // Covid-19 episodes are editable via the pencil icon
//     await page.getByPlaceholder('Search Folder').click();
//     await page.getByPlaceholder('Search Folder').fill('156739427');
//     await page.getByPlaceholder('Search Folder').press('Enter');
//     await page.getByRole('link', { name: '156739427' }).click();
//     await page.getByRole('button', { name: 'Continue' }).click();
//     await page.getByRole('row', { name: '156739427 COVID-19 - Case' }).getByRole('link').click();
//     await page.locator('#Extension148').selectOption('4901');
//     await page.locator('#Extension244').click();
//     await page.getByRole('link', { name: '29' }).click();
//     await page.getByRole('button', { name: 'Next' }).click();
//     await page.pause();
//     //await page.goto('http://localhost:5380/session/db9f856e2f674609b792177bd30cc4f8/Dashboard');
//     await page.getByPlaceholder('Search Folder').click();
//     await page.getByPlaceholder('Search Folder').fill('156739427');
//     await page.getByPlaceholder('Search Folder').press('Enter');
//     await page.getByRole('link', { name: '156739427' }).click();
//     await page.getByRole('button', { name: 'Continue' }).click();
//     // All facets of the Encounter details page are pulling through
//     //await page.goto('http://localhost:5380/session/db9f856e2f674609b792177bd30cc4f8/Dashboard');
//     await page.getByRole('link', { name: 'Encounters' }).click();
//     // You can view episode characteristics
//     await page.getByRole('link', { name: 'Inferred episodes' }).click();
//     await page.getByRole('row', { name: '156739427 Pregnancy Antenatal RMR, ICD10 Pregnancy, ICD10 Ectopic 2021-01-28 2021-02-01 ICD10 Pregnancy, ICD10 Ectopic 2021-02-01 ICD10 Ectopic' }).getByRole('link').click();
//     // Labs
//     // Filters, pivot and whitelist are working as expected.
//     // Printing is working as expected
//     await page.getByRole('link', { name: ' Labs' }).click();
//     await page.locator('#filter-on').click();
//     await page.getByRole('treeitem', { name: 'Public Health' }).getByRole('checkbox').click();
//     await page.getByRole('link', { name: 'Filter' }).click();
//     await page.locator('#whitelist-on').click();
//     await page.getByRole('button', { name: 'BY TEST' }).click();
//     //await page.getByRole('button', { name: 'Print Data' }).click();
//     //const page1 = await page1Promise;
//     // Follow-ups: 
//     //You can successfully
//     //create a Patient Referral
//     await page.getByRole('link', { name: ' Follow Ups' }).click();
//     await page.getByRole('button', { name: 'Create Referral' }).click();
//     await page.locator('label').filter({ hasText: 'Unknown' }).locator('span').click();
//     await page.getByRole('button', { name: 'Select Facility' }).click();
//     await page.getByText('District17').click();
//     await page.getByRole('tree').dblclick();
//     await page.getByText('Subdistrict27').dblclick();
//     await page.getByRole('treeitem', { name: 'Facility 111' }).getByRole('checkbox').click();
//     await page.locator('#ReasonDropDown').selectOption('1');
//     await page.locator('#ReasonOpt1DropDown').selectOption('27');
//     await page.locator('#ReasonOpt2DropDown').selectOption('32');
//     await page.getByLabel('Description').click();
//     await page.getByLabel('Description').fill('Testing');
//     await page.getByLabel('Due Date').click();
//     await page.getByRole('link', { name: '30' }).click();
//     await page.locator('#SubdistrictDropDown').selectOption('db2ccf28-1ecd-4b47-a2f3-45cedecb4af1');
//     await page.locator('#CopcSiteDropDown').selectOption('d9417b0f-41b1-4c39-a289-f3e7c3d19095');
//     await page.locator('#TeamAreaDropDown').selectOption('7e5cc05c-e5ba-4de7-9d73-ef0c627c4b30');
//     await page.locator('#ChwIndawoDropDown').selectOption('b2c36d5e-87c4-4bd5-95c4-d9ca8ca2ebc3');
//     await page.getByRole('button', { name: 'Submit' }).click();
//     await page.locator('#UnMaskedValue_AddressLine1').click();
//     await page.locator('#UnMaskedValue_AddressLine1').fill('12 ABC Street');
//     await page.locator('#UnMaskedValue_PostalCode').click();
//     await page.locator('#UnMaskedValue_PostalCode').fill('8000');
//     await page.getByRole('button', { name: 'Submit' }).click();
//     // create a General follow-up note
//     await page.getByRole('button', { name: 'Create Follow Up ' }).click();
//     await page.getByRole('link', { name: 'Create General Note' }).click();
//     await page.getByRole('combobox', { name: 'Health condition' }).selectOption('Applies to all episodes selected');
//     await page.getByRole('combobox', { name: 'Status' }).selectOption('Open');
//     await page.getByRole('combobox', { name: 'Follow-up Action' }).selectOption('Other');
//     await page.getByLabel('Follow-up Action Other').click();
//     await page.getByRole('combobox', { name: 'Follow-up Action' }).selectOption('SMS');
//     await page.getByLabel('Notes').click();
//     await page.getByLabel('Notes').fill('Testing');
//     await page.getByRole('button', { name: 'Create' }).click();
//     // You can edit and delete these follow-ups
//     await page.getByRole('link', { name: '' }).click();
//     await page.getByLabel('Notes').click();
//     await page.getByLabel('Notes').fill('Testing 2');
//     await page.getByRole('button', { name: 'Update' }).click();
//     await page.getByRole('link', { name: '' }).click();
//     await page.getByRole('button', { name: 'Delete' }).click();

//     // await page.getByRole('link', { name: ' Encounters' }).click();
//     // await page.getByRole('link', { name: ' Drugs' }).click();
//     await page.pause();
//     // await page.locator('#filter-on').click();
//     // await page.getByRole('treeitem', { name: 'D - DERMATOLOGICALS' }).getByRole('checkbox').click();
//     // await page.locator('#combined-disease-profiles-modal-dialog button').click();
//     // await page.locator('#filter-off').click();
//     // await page.locator('#pivot-drug-on').click();
//     // await page.getByRole('link', { name: 'Filter' }).click();
//     // await page.goto('http://localhost:5380/session/ed31a1e4a70b47088508a30ea92fc381/Encounter');
//     // await page.goto('http://localhost:5380/session/ed31a1e4a70b47088508a30ea92fc381/Episode');

// });
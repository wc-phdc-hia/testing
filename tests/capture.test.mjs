import { test } from '@playwright/test';

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

//Capture page
test('episode page test', async () => {
    
    //Data capturer workflow
    //Episodes page,capture an episode
    await page.goto('http://localhost:5380/Search');
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').click();
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').fill('106362783');
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').press('Enter');
    await page.getByRole('link', { name: '106362783' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('link', { name: 'Capture' }).click();
    await page.getByRole('button', { name: 'Datacapturer' }).click();
    await page.locator('#luEpisodeType').press('Enter');
    await page.locator('#luEpisodeType').selectOption('2');
    await page.getByRole('button', { name: 'Add' }).click();
    await page.locator('#Extension247').selectOption('801');
    await page.locator('#Extension245').click();
    await page.getByRole('link', { name: '3' }).click();
    await page.locator('#Extension9').selectOption('1002');
    await page.locator('#Extension6').selectOption('201');
    await page.locator('#Extension8').selectOption('304');
    await page.locator('#Extension10').selectOption('401');
    await page.locator('#Extension11').selectOption('402');
    await page.locator('#Extension12').selectOption('403');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
});

test('encounter page test', async () => {

    //Encounters page opens, capture any information
    await page.locator('#Extension252').selectOption('501');
    await page.locator('#Extension251').click();
    await page.getByRole('link', { name: '3' }).click();
    await page.locator('#Extension253-input').click();
    await page.getByRole('link', { name: 'Facility 111' }).click();
    await page.getByRole('button', { name: 'Collapse' }).click();
    await page.locator('#Extension253-modal').getByRole('button', { name: 'Choose' }).click();
    await page.locator('#Extension254').click();
    await page.getByRole('link', { name: '8', exact: true }).click();
    await page.getByRole('button', { name: 'Next' }).click();
});

test('lab results page test', async () => {
    
    //Labs page opens, capture any information
    await page.locator('#luNewTestTypes').selectOption('20');
    await page.getByRole('button', { name: 'Add' }).click();
    await page.locator('#Extension287').click();
    await page.getByRole('link', { name: '2' }).click();
    await page.locator('#Extension288').click();
    await page.locator('#Extension288').click();
    await page.locator('#Extension288').fill('45');
    await page.locator('#Extension313').selectOption('1201');
    await page.getByRole('button', { name: 'Save test' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
});

test('medication page test', async () => {

    //Medication page opens, capture any information
    await page.getByRole('button', { name: 'New Medication' }).click();
    await page.locator('#eleDrug').selectOption('11');
    await page.locator('#eleDaysPrescribed').click();
    await page.locator('#eleDaysPrescribed').fill('65');
    await page.getByRole('button', { name: 'Save' }).click();
});

// test('summary page test', async () => {

//     //Summary page opens, Save
//     await page.pause();
//     await page.getByRole('link', { name: 'Summary' }).click();
//     await page.getByRole('button', { name: 'Save' }).click();
// });

test('edit mode test', async () => {

    //Edit mode and verify captured information 
    await page.locator('#kt_aside_toggler').click();
    await page.getByRole('link', { name: ' Dashboard' }).click();
    await page.getByRole('row', { name: '106362783 2023-07-03 Facility 111 ' }).getByRole('link').nth(1).click();
    await page.getByRole('button', { name: 'Datacapturer' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('link', { name: 'Summary' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
});

test('encounter2 page test', async () => {

    //Prescription workflow
    //Encounter page opens, capture any information
    await page.locator('#kt_aside_toggler').click();
    await page.getByRole('link', { name: ' Capture' }).click();
    await page.getByRole('button', { name: 'Prescription' }).click();
    await page.locator('#Extension154').click();
    await page.locator('#Extension154').fill('Testing 123');
    await page.locator('#Extension315').click();
    await page.locator('#Extension315').fill('Nuts');
    await page.getByRole('button', { name: 'Next' }).click();
});

test('diagnosis test', async () => {

    //Diagnoses page opens, capture any diagnosis
    await page.getByRole('treeitem', { name: 'Episode Linked' }).locator('i').first().click();
    await page.getByRole('link', { name: 'B20.9 HIV disease resulting in unspecified infectious or parasitic disease' }).click();
    await page.getByRole('link', { name: 'B20.9 HIV disease resulting in unspecified infectious or parasitic disease' }).dblclick();
    await page.getByRole('button', { name: 'Next' }).click();
});

test('medication2 test', async () => {

    //Medications page opens, capture any medication
    await page.getByRole('link', { name: 'folic acid' }).click();
    await page.getByRole('button', { name: 'Create custom' }).click();
    await page.locator('#liDosingInstruction').selectOption('1');
    await page.locator('#numDoseStrength').click();
    await page.locator('#numDoseStrength').fill('2');
    await page.locator('#liDosingStrength').selectOption('61');
    await page.locator('#liDoseForm').selectOption('58');
    await page.locator('#liRouteOfAdmin').selectOption('30|intravenous use');
    await page.locator('#liFrequency').selectOption('147|four times a day');
    await page.locator('#txtDirections').click();
    await page.locator('#txtDirections').fill('test');
    await page.locator('#numDuration').click();
    await page.locator('#numDuration').fill('5');
    await page.locator('#numQuantity').click();
    await page.locator('#numQuantity').fill('2');
    await page.locator('#frmCustomDosage #numRepeats').click();
    await page.locator('#frmCustomDosage #numRepeats').fill('1');
    await page.getByRole('button', { name: 'Select for prescription and save' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
});

test('summary2 page test', async () => {

    //Summary page opens, Save
    await page.getByRole('button', { name: 'Save' }).click();
});

test('edit mode2 page test', async () => {

    //Edit mode and verify captured information
    await page.getByRole('row', { name: '106362783 2023-07-04 Facility 111 ' }).getByRole('link').nth(1).click();
    await page.getByRole('button', { name: 'Prescription' }).click();
    await page.getByRole('button', { name: 'Save' }).click();

});
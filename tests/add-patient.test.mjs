import { test, expect } from '@playwright/test';

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page;
test.beforeAll(async ({ browser }) => {
page = await browser.newPage();
});

test.afterAll(async () => {
await page.close();
});

test('spv-patient', async () => {
    await page.goto('http://localhost:5380/search');
    await page.locator('#UnMaskedValue_SearchDetailsModel_FirstName').click();
    await page.locator('#UnMaskedValue_SearchDetailsModel_FirstName').fill('John');
    await page.getByRole('button', { name: 'Search' }).click();

    // Check if patient exists by inspecting the folder number
    const folderNumber = 'IHP5473565'; 
    const patientLocator = page.locator(`span[data-original="${folderNumber}"]`);
    const patientCount = await patientLocator.count();

    if (patientCount === 0) {
        await page.getByRole('link', { name: 'Add Patient' }).click();
        await page.getByLabel('Surname').click();
        await page.getByLabel('Surname').fill('Doe');
        await page.getByPlaceholder('yyyy-mm-dd').click();
        await page.getByRole('link', { name: '7', exact: true }).click();
        await page.getByRole('combobox', { name: 'Sex' }).selectOption('102');
        await page.getByLabel('ID Number').click();
        await page.getByLabel('ID Number').fill('123456789');
        await page.getByRole('button', { name: 'Submit' }).click();
    }
});

test('enable facilities', async () => {

    await page.locator('#kt_aside_toggler').click();
    await page.waitForTimeout(2000);
    await page.locator('span.kt-menu__link-text:has-text("Settings")').click();
    await page.getByRole('link', { name: 'List OpenIHP Users' }).click();
    await page.waitForTimeout(1000);
    const editLink = await page.locator('a[href="/User/Edit?id=21037"]').click();
    
    await page.locator('label').filter({ hasText: 'Data Capturer' }).locator('span').click();
    const dropdownLocator = await page.waitForSelector("#ClinicianCategoryId.form-control");
    await dropdownLocator.selectOption('2');

    
    await page.getByRole('button', { name: 'Assign Facilities' }).click(); 
    const checkbox = await page.locator('#facilityTree span.fancytree-checkbox').nth(0);
    const element = await page.waitForSelector('li.fancytree-lastsib');

    if (element) {
        const ariaSelectedValue = await page.evaluate(element => {
        return element.getAttribute('aria-selected')}, element);

        if (ariaSelectedValue === 'false') {
            await checkbox.click();
        }
    }

    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('button', { name: 'Save User' }).click();
    await page.getByRole('button', { name: 'Accept and Continue' }).click();


});

test('first capture', async () => {

    await page.getByRole('tab', { name: 'Search' }).click();
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').click();
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').fill('106362783');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('link', { name: '106362783' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.locator('#kt_aside_toggler').click();
    await page.locator('span.kt-menu__link-text:has-text("Capture")').click();
    await page.getByRole('button', { name: 'Datacapturer' }).click();

    //Checking to see if there are any records
    const messageLocator = await page.textContent('body');
    if (messageLocator.includes('There are no records to display')) {
        await page.locator('#luEpisodeType').selectOption('6');
        await page.getByRole('button', { name: 'Add' }).click();
        await page.locator('#Extension247').selectOption('801');
        await page.locator('#Extension245').click();
        await page.getByRole('link', { name: '2', exact: true }).click();
        await page.locator('#Extension6').selectOption('201');
        await page.locator('#Extension19').selectOption('2301');
        await page.locator('#Extension21').selectOption('2501');
        await page.locator('#Extension22').selectOption('2601');
        await page.getByRole('button', { name: 'Save' }).click();
        }
    
    await page.getByRole('button', { name: 'Next' }).click();
    await page.locator('#Extension252').selectOption('501');
    await page.locator('#Extension253-input').click();
    await page.getByRole('link', { name: 'Facility 111' }).click();
    await page.locator('#Extension253-modal').getByRole('button', { name: 'Choose' }).click();
    await page.locator('#Extension254').click();
    await page.getByRole('link', { name: '26' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('link', { name: 'Summary' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
});
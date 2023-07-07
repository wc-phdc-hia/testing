import { test } from '@playwright/test';

test('admin test', async ({ page }) => {
    //Patient admin
    await page.goto('http://localhost:5380/Search');
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').click();
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').fill('106362783');
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').press('Enter');
    await page.getByRole('link', { name: '106362783' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.locator('#kt_aside_toggler').click();
    await page.getByRole('link', { name: ' Patient Admin' }).click();
    await page.getByPlaceholder('Search Folder').click();
    //selecting and editing a patient that was added on SPV
    await page.getByPlaceholder('Search Folder').fill('IHP5473565');
    await page.getByPlaceholder('Search Folder').press('Enter');
    await page.getByRole('link', { name: 'IHP5473565' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.locator('#kt_aside_toggler').click();
    await page.getByRole('link', { name: ' Patient Admin' }).click();
    await page.getByRole('button', { name: 'Actions ' }).click();
    await page.getByRole('link', { name: 'Edit' }).click();
    await page.getByLabel('First Name').click();
    await page.getByLabel('First Name').fill('Johnny');
    await page.getByRole('button', { name: 'Submit' }).click();
});
import { test } from '@playwright/test';

//Patient
test('demo test', async ({ page }) => {
    //demo mode
    await page.goto('http://localhost:5380/Search');
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').click();
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').fill('106362783');
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').press('Enter');
    await page.getByRole('link', { name: '106362783' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.locator('#kt_aside_toggler').click();
    await page.getByRole('link', { name: ' Inferred Episodes' }).click();
    //Eye icon leads to inferred episodes details
    await page.getByRole('row', { name: '106362783 Pregnancy MOU Visit, Rhesus test, ICD10 Pregnancy, Live Birth 2016-10-04 2017-03-13 Live Birth 2017-03-13 Live Birth' }).getByRole('link').click();
});
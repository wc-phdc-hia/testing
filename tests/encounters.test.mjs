import { test } from '@playwright/test';

test('encounters test', async ({ page }) => {    
    //Encounters page
    await page.goto('http://localhost:5380/Search');
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').click();
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').fill('106362783');
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').press('Enter');
    await page.getByRole('link', { name: '106362783' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('link', { name: 'Encounters' }).click();
    //Eye icon leads to encounter details
    await page.getByRole('row', { name: '106362783 2021-11-25 Facility 525 WARDX ' }).getByRole('link').first().click();

});
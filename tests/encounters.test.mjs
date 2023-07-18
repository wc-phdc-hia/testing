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
    const viewDetailsLocator = page.locator('a.btn[data-original-title="View encounter details"]').first();
    await viewDetailsLocator.click();
});
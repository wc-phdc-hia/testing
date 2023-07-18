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
    const firstViewLinkLocator = page.locator('a.btn.btn-info.btn-elevate.btn-circle.btn-icon[data-original-title="View episode characteristics"]').first();
    await firstViewLinkLocator.click();

});
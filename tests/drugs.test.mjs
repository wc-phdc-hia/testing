import { test } from '@playwright/test';

test('drugs test', async ({ page }) => {
    //Drugs page
    await page.goto('http://localhost:5380/Search');
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').click();
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').fill('106362783');
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').press('Enter');
    await page.getByRole('link', { name: '106362783' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.locator('#kt_aside_toggler').click();
    await page.getByRole('link', { name: ' Drugs' }).click();
    await page.locator('#filter-on').click();
    await page.waitForTimeout(5000);
    await page.getByRole('treeitem', { name: 'D - DERMATOLOGICALS' }).getByRole('checkbox').click();
    await page.getByRole('link', { name: 'Filter' }).click();
    await page.locator('#filter-off').click();
    await page.locator('#pivot-drug-on').click();
    await page.getByRole('treeitem', { name: 'C - CARDIOVASCULAR SYSTEM' }).getByRole('checkbox').click();
    await page.getByRole('link', { name: 'Filter' }).click();
});
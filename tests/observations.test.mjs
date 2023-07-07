import { test } from '@playwright/test';

test('observation test', async ({ page }) => {
    //Observations page
    await page.goto('http://localhost:5380/Search');
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').click();
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').fill('106362783');
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').press('Enter');
    await page.getByRole('link', { name: '106362783' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.locator('#kt_aside_toggler').click();
    await page.getByRole('link', { name: ' Observations' }).click();
    await page.getByRole('heading', { name: 'Filter' }).click();
    await page.getByRole('button', { name: 'ON' }).click();
    await page.getByRole('treeitem', { name: 'Anthropometry' }).locator('span').nth(3).click();
    await page.getByRole('link', { name: 'Filter' }).click();
});
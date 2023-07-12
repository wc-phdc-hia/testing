import { test } from '@playwright/test';

test('followup test', async ({ page }) => {
    //Follow-ups page
    await page.goto('http://localhost:5380/Search');
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').click();
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').fill('106362783');
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').press('Enter');
    await page.getByRole('link', { name: '106362783' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.locator('#kt_aside_toggler').click();
    await page.getByRole('link', { name: ' Follow Ups' }).click();
    await page.getByRole('button', { name: 'Create Follow Up ' }).click();
    await page.getByRole('link', { name: 'Create General Note' }).click();
    await page.getByRole('combobox', { name: 'Health condition' }).selectOption('Pregnancy');
    await page.getByRole('combobox', { name: 'Status' }).selectOption('Resolved');
    await page.getByRole('combobox', { name: 'Follow-up Action' }).selectOption('Other');
    await page.getByLabel('Notes').click();
    await page.getByLabel('Notes').fill('Testing');
    await page.getByRole('button', { name: 'Create' }).click();
});
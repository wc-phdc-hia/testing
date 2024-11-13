import { test } from '@playwright/test';

test('search test', async ({ page }) => {
    
    //folder search
    await page.goto('http://localhost:5380/Search');
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').click();
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').fill('106362783');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('link', { name: '106362783' }).click();

    //ID number search
    await page.goto('http://localhost:5380/Search');
    await page.locator('#UnMaskedValue_SearchDetailsModel_IdNumber').click();
    await page.locator('#UnMaskedValue_SearchDetailsModel_IdNumber').fill('7205241063627');
    await page.locator('#UnMaskedValue_SearchDetailsModel_IdNumber').press('Enter');

    //first name search
    await page.goto('http://localhost:5380/Search');
    await page.locator('#UnMaskedValue_SearchDetailsModel_FirstName').click();
    await page.locator('#UnMaskedValue_SearchDetailsModel_FirstName').fill('Audrey L');
    await page.locator('#UnMaskedValue_SearchDetailsModel_FirstName').press('Enter');

    //surname search
    await page.goto('http://localhost:5380/Search');
    await page.locator('#UnMaskedValue_SearchDetailsModel_Surname').click();
    await page.locator('#UnMaskedValue_SearchDetailsModel_Surname').fill('NTSHATHA');
    await page.locator('#UnMaskedValue_SearchDetailsModel_Surname').press('Enter');

    //date of birth search
    await page.goto('http://localhost:5380/Search');
    await page.getByRole('textbox', { name: 'yyyy-mm-dd' }).click();
    await page.getByRole('textbox', { name: 'yyyy-mm-dd' }).fill('1972-05-24');
    await page.getByRole('textbox', { name: 'yyyy-mm-dd' }).press('Enter');
    await page.getByRole('button', { name: 'Search' }).click();
});
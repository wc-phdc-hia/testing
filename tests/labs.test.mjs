import { test } from '@playwright/test';

test('labs test', async ({ page }) => {
    //Labs page
    await page.goto('http://localhost:5380/Search');
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').click();
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').fill('106362783');
    await page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').press('Enter');
    await page.getByRole('link', { name: '106362783' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.locator('#kt_aside_toggler').click();
    await page.locator('span.kt-menu__link-text:has-text("Labs")').click();
    await page.locator('#whitelist-on').click();
    await page.locator('#whitelist-off').click();
});
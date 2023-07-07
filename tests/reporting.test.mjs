import { test } from '@playwright/test';

test('reporting test', async ({ page }) => {
    
    //reports
    await page.goto('http://localhost:5380/Search');
    await page.locator('#kt_aside_toggler').click();
    await page.getByRole('link', { name: ' Reports' }).click();
    await page.locator('#Cat7 > a').click();
    await page.locator('#Cat9 > a').click();
    await page.locator('#Cat38').getByRole('link').click();
});

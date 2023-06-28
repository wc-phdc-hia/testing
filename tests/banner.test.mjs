import { test } from '@playwright/test';

test('authentication test', async ({ page }) => {
    await page.goto('http://localhost:5380/Search');
    await page.pause();
    await page.getByRole('img').click();
    await page.getByText('Single Patient Viewer', { exact: true }).click();
    await page.getByText('Demo', { exact: true }).click();
    await page.getByPlaceholder('Search Folder').click();
    await page.locator('.fa-2x').click();
    await page.getByText('Default User').click();
    await page.locator('.fa-2x').click();
    await page.getByRole('button', { name: 'Logout' }).click();
    await page.pause();

    // ---------------------
    await page.context().close();
    await page.context().browser().close();
});

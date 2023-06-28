import { test } from '@playwright/test';

test('authentication test', async ({ page }) => {
  await page.goto('http://localhost:5380/Search');
  await page.pause();
//   await page.click('img[alt="WCDoH"]');

//   const element = await page.locator('#kt_header_menu li >> text=Single Patient Viewer');

//   await page.click('#kt_header_menu span');
//   await page.click('#kt_header_menu span');

//   await page.click('input[placeholder="Search Folder"]');
//   await page.click('.fa-2x');

//   await page.click('text=Default User');
//   await page.click('.fa-2x');

//   await page.click('button >> text=Logout');

//   // ---------------------
//   await page.context().close();
//   await page.context().browser().close();
});

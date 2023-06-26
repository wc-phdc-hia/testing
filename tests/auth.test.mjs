import { test, expect } from '../playwright/fixtures.mjs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5380/');
  await page.locator('text=Log In').click();
  await expect(page).toHaveURL('http://localhost:5380/Account/Login');
  await page.locator('text=Local').click();
  await page.locator('[placeholder="Enter your user name"]').click();
  await page.locator('[placeholder="Enter your user name"]').fill('user');
  await page.locator('[placeholder="Enter your password"]').click();
  await page.locator('[placeholder="Enter your password"]').fill('password');
  await page.locator('text=Sign in to SPV').click();
  await expect(page).toHaveURL('http://localhost:5380/TermsOfUse');
  await page.locator('text=Accept and Continue').click();
  await expect(page).toHaveURL('http://localhost:5380/Search');
  await page.pause();
});
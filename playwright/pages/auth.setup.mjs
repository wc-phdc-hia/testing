/* eslint-disable prettier/prettier */
import { test as setup } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
        
    await page.goto(process.env.PLAYWRIGHT_URL);
    await page.getByLabel('Local').check();
  await page.getByPlaceholder('Enter your user name').click();
  await page.getByPlaceholder('Enter your user name').fill(process.env.PLAYWRIGHT_LOGINUSERNAME);
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill(process.env.PLAYWRIGHT_LOGINPASSWORD);
  await page.getByRole('button', { name: 'Sign in to SPV' }).click();
   
   await page.context().storageState({ path: authFile });
   
    });
import { test as setup } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    
    await page.goto('http://localhost:5380/');
    await page.getByText('Log In').click();
    await page.getByPlaceholder('Enter your user name').fill('default');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('SunShinE101!!##');
    await page.getByLabel('Local').check();
    await page.getByRole('button', { name: 'Sign in to SPV' }).click();
    await page.getByRole('button', { name: 'Accept and Continue' }).click();
    await page.waitForURL('http://localhost:5380/Search');

    // End of authentication steps.

    await page.context().storageState({ path: authFile });
    });

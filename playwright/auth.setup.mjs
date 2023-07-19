import { test as setup } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    
    
    await page.goto('http://localhost:5380/');
    await page.getByText('Log In').click();
    await page.getByLabel('Local').check();
    await page.getByPlaceholder('Enter your user name').click();
    await page.getByPlaceholder('Enter your user name').fill('default');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('default');
    await page.getByRole('button', { name: 'Sign in to SPV' }).click();

    //An alternative if default credentials are incorrect
    const invalidCredentialsMessage = await page.textContent('li');
    if (invalidCredentialsMessage === 'Invalid username or password.') {
        await page.getByPlaceholder('Enter your password').click();
        await page.getByPlaceholder('Enter your password').fill(process.env.PASSWORD);
        await page.getByLabel('Local').check();
        await page.getByRole('button', { name: 'Sign in to SPV' }).click();
        await page.getByRole('button', { name: 'Accept and Continue' }).click();
        return;
    }

    else {
        // Proceed with password reset and authentication
        await page.getByPlaceholder('Enter new password').click();
        await page.getByPlaceholder('Enter new password').fill(process.env.PASSWORD);
        await page.getByPlaceholder('Confirm new password').click();
        await page.getByPlaceholder('Confirm new password').fill(process.env.PASSWORD);
        await page.getByRole('button', { name: 'Reset Password' }).click();
        await page.getByPlaceholder('Enter your user name').fill('default');
        await page.getByPlaceholder('Enter your password').click();
        await page.getByPlaceholder('Enter your password').fill(process.env.PASSWORD);
        await page.getByRole('button', { name: 'Sign in to SPV' }).click();
        await page.getByRole('button', { name: 'Accept and Continue' }).click();
    
        await page.context().storageState({ path: authFile });
      }
    });
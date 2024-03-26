/* eslint-disable radix */
/* eslint-disable no-useless-constructor */
/* eslint-disable prettier/prettier */
const UtilityMethods = require('../utilities/UtilityMethods');

class LoginAfterResetPwdPage extends UtilityMethods {
    constructor(page) {
        super(page);

    }

    // This below method for changing the existing user pwd

    async LoginAfterResetPwd()
    {
        await this.page.goto(process.env.PLAYWRIGHT_URL);

await this.click('//*[@id="kt_header"]/div[2]/div[3]/div[1]/div/span/i');
  await this.clickButtonByRoleAndName('button', 'Logout');
        await this.page.getByLabel('Local').check();
        await this.page.getByPlaceholder('Enter your user name').click();
        await this.page.getByPlaceholder('Enter your user name').fill(process.env.PLAYWRIGHT_LOGINAFTERRESETPWDUSERNAME);
        await this.page.getByPlaceholder('Enter your password').click();
        await this.page.getByPlaceholder('Enter your password').fill(process.env.PLAYWRIGHT_LOGINAFTERRESETPWDPWD);
        await this.page.getByRole('button', { name: 'Sign in to SPV' }).click();
        await this.page.waitForTimeout(2000);


        await this.page.getByPlaceholder('Enter new password').click();
        await this.page.getByPlaceholder('Enter new password').fill(process.env.PLAYWRIGHT_LOGINAFTERRESETPWDNEWPWD);
        await this.page.getByPlaceholder('Confirm new password').click();
        await this.page.waitForTimeout(2000);

        await this.page.getByPlaceholder('Confirm new password').fill(process.env.PLAYWRIGHT_LOGINAFTERRESETPWDNEWPWD);
        await this.page.getByRole('button', { name: 'Reset Password' }).click();
        await this.page.getByPlaceholder('Enter your user name').click();
        await this.page.getByPlaceholder('Enter your user name').fill(process.env.PLAYWRIGHT_LOGINAFTERRESETPWDUSERNAME);
        
        await this.page.getByPlaceholder('Enter your password').click();
        await this.page.getByPlaceholder('Enter your password').fill(process.env.PLAYWRIGHT_LOGINAFTERRESETPWDNEWPWD);
        await this.page.getByRole('button', { name: 'Sign in to SPV' }).click();
         await this.page.getByRole('button', { name: 'Accept and Continue' }).click();
        await this.page.waitForTimeout(2000);

    }
}
module.exports = LoginAfterResetPwdPage;
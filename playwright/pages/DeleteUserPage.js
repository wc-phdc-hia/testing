/* eslint-disable radix */
/* eslint-disable no-useless-constructor */
/* eslint-disable prettier/prettier */
const UtilityMethods = require('../utilities/UtilityMethods');

class DeleteUserPage extends UtilityMethods {
    constructor(page) {
        super(page);
        // Define selectors or other properties specific to the labs page if needed
    }

    // This below method for Delete the user

    async DeleteUser() {
        await this.goTo(process.env.PLAYWRIGHT_TARGET_URL);
        await this.click('#kt_aside_toggler');
        await this.clickButtonByRoleAndName('link', ' Settings');
        await this.clickButtonByRoleAndName('link', 'List OpenIHP Users');
        await this.click('//*[@id="row00jqxgrid"]/div[2]');
        await this.type('//*[@id="row00jqxgrid"]/div[2]', process.env.PLAYWRIGHT_DELETEUSERUSERNAME);
        await this.page.locator('//*[@id="row00jqxgrid"]/div[2]').press('Enter');
        await this.page.waitForTimeout(1000);
        await this.click('//*[@id="row0jqxgrid"]/div[9]/div/a[2]');
        await this.page.waitForTimeout(5000);
        await this.clickButtonByRoleAndName('button', 'Delete User');


    }
}
module.exports = DeleteUserPage;
/* eslint-disable no-useless-constructor */
/* eslint-disable prettier/prettier */
const UtilityMethods = require('../utilities/UtilityMethods');

class SearchUserByDiffFiltersPage extends UtilityMethods {
    constructor(page) {
        super(page);
       
    }
    // This below Methods for Searching the User Based on Different Criteria

    async SearchByUserName() {
        await this.goTo(process.env.PLAYWRIGHT_TARGET_URL);
        await this.click('#kt_aside_toggler');
        await this.clickButtonByRoleAndName('link', ' Settings');
        await this.clickButtonByRoleAndName('link', 'List OpenIHP Users');
        await this.click('//*[@id="row00jqxgrid"]/div[2]');
        await this.type('//*[@id="row00jqxgrid"]/div[2]', process.env.PLAYWRIGHT_SEARCHUSERBYUSERNAME);
        await this.page.locator('//*[@id="row00jqxgrid"]/div[2]').press('Enter');
        await this.page.waitForTimeout(1000);
    }

    async SearchByFirstName() {
        await this.goTo(process.env.PLAYWRIGHT_TARGET_URL);
        await this.click('#kt_aside_toggler');
        await this.clickButtonByRoleAndName('link', ' Settings');
        await this.clickButtonByRoleAndName('link', 'List OpenIHP Users');
        await this.click('//*[@id="row00jqxgrid"]/div[3]');
        await this.type('//*[@id="row00jqxgrid"]/div[3]', process.env.PLAYWRIGHT_SEARCHUSERBYFIRSTNAME);
        await this.page.locator('//*[@id="row00jqxgrid"]/div[3]').press('Enter');
        await this.page.waitForTimeout(1000);

    }

    async SearchByLastName() {
        await this.goTo(process.env.PLAYWRIGHT_TARGET_URL);
        await this.click('#kt_aside_toggler');
        await this.clickButtonByRoleAndName('link', ' Settings');
        await this.clickButtonByRoleAndName('link', 'List OpenIHP Users');
        await this.click('//*[@id="row00jqxgrid"]/div[4]');
        await this.type('//*[@id="row00jqxgrid"]/div[4]', process.env.PLAYWRIGHT_SEARCHUSERBYLASTNAME);
        await this.page.locator('//*[@id="row00jqxgrid"]/div[4]').press('Enter');
        await this.page.waitForTimeout(1000);

    }

    async SearchByEmail() {
        await this.goTo(process.env.PLAYWRIGHT_TARGET_URL);
        await this.click('#kt_aside_toggler');
        await this.clickButtonByRoleAndName('link', ' Settings');
        await this.clickButtonByRoleAndName('link', 'List OpenIHP Users');
        await this.click('//*[@id="row00jqxgrid"]/div[5]');
        await this.type('//*[@id="row00jqxgrid"]/div[5]', process.env.PLAYWRIGHT_SEARCHUSERBYEMAIL);
        await this.page.locator('//*[@id="row00jqxgrid"]/div[5]').press('Enter');
        await this.page.waitForTimeout(1000);

    }

    async SearchByType() {
        await this.goTo(process.env.PLAYWRIGHT_TARGET_URL);
        await this.click('#kt_aside_toggler');
        await this.clickButtonByRoleAndName('link', ' Settings');
        await this.clickButtonByRoleAndName('link', 'List OpenIHP Users');
        await this.click('//*[@id="row00jqxgrid"]/div[6]');
        await this.type('//*[@id="row00jqxgrid"]/div[6]', process.env.PLAYWRIGHT_SEARCHUSERBYTYPE);
        await this.page.locator('//*[@id="row00jqxgrid"]/div[6]').press('Enter');
        await this.page.waitForTimeout(1000);

    }

    async SearchByLastLogin() {
        await this.goTo(process.env.PLAYWRIGHT_TARGET_URL);
        await this.click('#kt_aside_toggler');
        await this.clickButtonByRoleAndName('link', ' Settings');
        await this.clickButtonByRoleAndName('link', 'List OpenIHP Users');
        await this.click('//*[@id="row00jqxgrid"]/div[7]');
        await this.type('//*[@id="row00jqxgrid"]/div[7]', process.env.PLAYWRIGHT_SEARCHUSERBYLASTLOGIN);
        await this.page.locator('//*[@id="row00jqxgrid"]/div[7]').press('Enter');
        await this.page.waitForTimeout(1000);

    }

}
module.exports = SearchUserByDiffFiltersPage;
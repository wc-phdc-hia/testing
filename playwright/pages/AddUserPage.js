/* eslint-disable radix */
/* eslint-disable no-useless-constructor */
/* eslint-disable prettier/prettier */

const UtilityMethods = require('../utilities/UtilityMethods');

class AddUserPage extends UtilityMethods {
    constructor(page) {
        super(page);

    }

    // This method for adding the new openIHP user

    async Adduser() {

        await this.goTo(process.env.PLAYWRIGHT_TARGET_URL);
        await this.click('#kt_aside_toggler');
        await this.clickButtonByRoleAndName('link', ' Settings');
        await this.clickButtonByRoleAndName('link', 'List OpenIHP Users');
        await this.click('//*[@id="row00jqxgrid"]/div[2]');
        await this.type('//*[@id="row00jqxgrid"]/div[2]', process.env.PLAYWRIGHT_ADDUSERUSERNAME);
        await this.page.locator('//*[@id="row00jqxgrid"]/div[2]').press('Enter');
        await this.page.waitForTimeout(2000);
        const divValue = await this.getDivValue('//*[@id="pagerjqxgrid"]/div/div[6]');

        // this below code will check if the user exists and create user if doesn't exists 
        if (parseInt(divValue.charAt(7)) === 0) {
            await this.clickButtonByRoleAndName('link', 'New User');
            await this.click('#UserName');
            await this.locateFill('#UserName', process.env.PLAYWRIGHT_ADDUSERUSERNAME);
            await this.click('#FirstName');
            await this.locateFill('#FirstName', process.env.PLAYWRIGHT_ADDUSERFIRSTNAME);
            await this.click('#Surname');
            await this.locateFill('#Surname', process.env.PLAYWRIGHT_ADDUSERLASTNAME);
            await this.click('#Email');
            await this.locateFill('#Email', process.env.PLAYWRIGHT_ADDUSEREMAIL);
            await this.click('#Notes');
            await this.locateFill('#Notes', process.env.PLAYWRIGHT_ADDUSERNOTES);
            await this.click('#Qualification');
            await this.locateFill('#Qualification', process.env.PLAYWRIGHT_Qualification);
            await this.click('#RegistrationNumber');
            await this.locateFill('#RegistrationNumber', process.env.PLAYWRIGHT_RegistrationNumber);
            await this.click('#Designation');
            await this.locateFill('#Designation', process.env.PLAYWRIGHT_ADDUSERDESIGNATION);
            await this.click('#Designation');
            await this.locateFill('#Designation', process.env.PLAYWRIGHT_ADDUSERDESIGNATION);
            await this.click('#Department');
            await this.locateFill('#Department', process.env.PLAYWRIGHT_ADDUSERDEPARTMENT);
            await this.click('#PrimaryPlaceOfWork');
            await this.locateFill('#PrimaryPlaceOfWork', process.env.PLAYWRIGHT_ADDUSERPLACEOFWORK);
            await this.click('#LineManagerName');
            await this.locateFill('#LineManagerName', process.env.PLAYWRIGHT_ADDUSERLINEMANAGERNAME);
            await this.click('#LineManagerSurname');
            await this.locateFill('#LineManagerSurname', process.env.PLAYWRIGHT_ADDUSERLINEMANAGERSURNAME);
            await this.click('#passwordInput');
            await this.locateFill('#passwordInput', process.env.PLAYWRIGHT_ADDUSERPASSWORD);
            await this.SelectCheckbox('label', process.env.PLAYWRIGHT_ADDUSERCHK1, 'span');
            await this.SelectCheckbox('label', process.env.PLAYWRIGHT_ADDUSERCHK2, 'span');
            await this.SelectCheckbox('label', process.env.PLAYWRIGHT_ADDUSERCHK3, 'span');
            await this.SelectCheckbox('label', process.env.PLAYWRIGHT_ADDUSERCHK4, 'span');
            await this.SelectCheckbox('label', process.env.PLAYWRIGHT_ADDUSERCHK5, 'span');
            await this.SelectCheckbox('label', process.env.PLAYWRIGHT_ADDUSERCHK6, 'span');
            await this.SelectCheckbox('label', process.env.PLAYWRIGHT_ADDUSERCHK7, 'span');
            await this.SelectCheckbox('label', process.env.PLAYWRIGHT_ADDUSERCHK8, 'span');
            await this.SelectCheckbox('label', process.env.PLAYWRIGHT_ADDUSERCHK9, 'span');
            await this.page.getByText('Account Type Local Domain AzureAD UserName First Name Surname Email Address').click();
            await this.page.waitForTimeout(3000);
            await this.clickButtonByRoleAndName('button', 'Save User');
            await this.page.waitForTimeout(3000);

        }
        else {
            // console.log('User Already Exists')
        }
    }
}
module.exports = AddUserPage;
/* eslint-disable radix */
/* eslint-disable no-useless-constructor */
/* eslint-disable prettier/prettier */
const BasePage = require('../utilities/UtilityMethods');

class AddPatientAttachmentPage extends BasePage {
    constructor(page) {
        super(page);
        // Define selectors or other properties specific to the labs page if needed
    }

async AddPatientAttachment()
{ 
     
    await this.page.goto('http://openihp-qa-web.southafricanorth.cloudapp.azure.com:8390/session');
  await this.page.getByRole('link', { name: ' Patient Search' }).click();
  await this.page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').click();
  await this.page.locator('#UnMaskedValue_SearchDetailsModel_ClinicomNumber').fill('106362783');
  await this.page.getByRole('button', { name: 'Search' }).click();
  await this.page.getByRole('link', { name: '106362783' }).click();
  await this.page.getByRole('button', { name: 'Continue' }).click();
  await this.click('#kt_aside_toggler');
  await this.page.getByRole('link', { name: ' Patient Admin' }).click();
  await this.page.getByRole('button', { name: 'Add Attachment' }).click();
  await this.page.getByLabel('DocumentType').selectOption('Annexure B - Patient information Systems');
  await this.page.locator('#fileUpload').click();
  await this.page.locator('#fileUpload').setInputFiles('TB cascade summary.pdf');
  await this.page.getByLabel('Description').click();
  await this.page.getByLabel('Description').fill('summary report');
  await this.page.locator('#addAttachment').getByRole('button', { name: 'Add Attachment' }).click();
 
}
}
module.exports = AddPatientAttachmentPage;

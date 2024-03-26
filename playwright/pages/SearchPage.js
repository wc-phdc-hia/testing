/* eslint-disable no-useless-constructor */
/* eslint-disable prettier/prettier */
const UtilityMethods = require('../utilities/UtilityMethods');
class SearchPage extends UtilityMethods {
  constructor(page) 
  {
    super(page);
  }

    // This below methods for Searching the Patient Based on Different Criteria

  async searchbyfolder() {

    await this.goTo(process.env.PLAYWRIGHT_TARGET_URL);
    await this.click('#UnMaskedValue_SearchDetailsModel_ClinicomNumber');
    await this.locateFill('#UnMaskedValue_SearchDetailsModel_ClinicomNumber', process.env.PLAYWRIGHT_FOLDERNO);
    await this.clickButtonByRoleAndName('button', 'Search');
   // await this.clickButtonByRoleAndName('link', process.env.PLAYWRIGHT_FOLDERNO);
   await this.click('//*[@id="kt_table_1"]/tbody/tr/td[1]/a');

    await this.clickButtonByRoleAndName('button', 'Continue');
    await this.page.waitForTimeout(2000);
    await this.clickButtonByRoleAndName('link', 'Inferred episodes');
    await this.click("#searchMenuItem");
  }

  async searchbyIdNumber() {

    await this.click('#UnMaskedValue_SearchDetailsModel_IdNumber');
    await this.locateFill('#UnMaskedValue_SearchDetailsModel_IdNumber', process.env.PLAYWRIGHT_IDNO);
    await this.clickButtonByRoleAndName('button', 'Search');
    await this.clickButtonByRoleAndName('link', process.env.PLAYWRIGHT_FOLDERNO);
    await this.clickButtonByRoleAndName('button', 'Continue');
    await this.clickButtonByRoleAndName('link', 'Encounters');
    await this.click("#searchMenuItem");

  }

  async searchbySurname() {

    await this.click('#UnMaskedValue_SearchDetailsModel_Surname');
    await this.locateFill('#UnMaskedValue_SearchDetailsModel_Surname', process.env.PLAYWRIGHT_SURNAME);
    await this.clickButtonByRoleAndName('button', 'Search');
    await this.clickButtonByRoleAndName('link', process.env.PLAYWRIGHT_FOLDERNO);
    await this.clickButtonByRoleAndName('button', 'Continue');
    await this.clickButtonByRoleAndName('link', 'Medicines');
    await this.click("#searchMenuItem");
  }

  async searchbyFirstname() {

    await this.click('#UnMaskedValue_SearchDetailsModel_FirstName');
    await this.locateFill('#UnMaskedValue_SearchDetailsModel_FirstName', process.env.PLAYWRIGHT_FIRSTNAME);
    await this.clickButtonByRoleAndName('button', 'Search');
    await this.clickButtonByRoleAndName('link', process.env.PLAYWRIGHT_FOLDERNO);
    await this.clickButtonByRoleAndName('button', 'Continue');
    await this.page.waitForTimeout(1000);
    await this.click("#searchMenuItem");
  }

  async searchbyDOB() {

    await this.fillInputByPlaceholder("yyyy-mm-dd", process.env.PLAYWRIGHT_DOB);
    await this.clickButtonByRoleAndName('button', 'Search');
    await this.clickButtonByRoleAndName('link', process.env.PLAYWRIGHT_FOLDERNO);
    await this.clickButtonByRoleAndName('button', 'Continue');
    await this.page.waitForTimeout(1000);

  }

  async quickSearch() {

    await this.click('#generalSearch');
    await this.locateFill('#generalSearch', process.env.PLAYWRIGHT_FOLDERNO);
    await this.page.getByPlaceholder('Search Folder').press('Enter');
    await this.clickButtonByRoleAndName('link', process.env.PLAYWRIGHT_FOLDERNO);
    await this.clickButtonByRoleAndName('button', 'Continue');
    await this.click("#searchMenuItem");
    await this.page.waitForTimeout(1000);

  }

  async recentPatient() {

    await this.clickButtonByRoleAndName('tab', 'Recent Patients');
    await this.clickButtonByRoleAndName('link', process.env.PLAYWRIGHT_FOLDERNO);
    await this.clickButtonByRoleAndName('button', 'Continue');
    await this.page.waitForTimeout(1000);

  }

}

module.exports = SearchPage;
// import { test, expect } from '../playwright/fixtures.mjs';

// test('Add patient functionality', async ({ page }) => {
//     const frame = await page.frame('frame-selector');
//     await frame.waitForSelector('input[name="UnMaskedValue\\.SearchDetailsModel\\.FirstName"]', { visible: true });
//     await frame.click('input[name="UnMaskedValue\\.SearchDetailsModel\\.FirstName"]');

//     // Click input[name="UnMaskedValue\.SearchDetailsModel\.FirstName"]
//     await page.locator('input[name="UnMaskedValue\\.SearchDetailsModel\\.FirstName"]').click();
// // Fill input[name="UnMaskedValue\.SearchDetailsModel\.FirstName"]
//     await page.locator('input[name="UnMaskedValue\\.SearchDetailsModel\\.FirstName"]').fill('Jane');
// // Click #form-patient-search-advanced >> text=Search
//     await page.locator('#form-patient-search-advanced >> text=Search').click();
//     // assert.equal(page.url(), 'http://localhost:5380/Search/SearchByDetails');
//     // Click text=Add Patient
//     await page.locator('text=Add Patient').click();
//     // assert.equal(page.url(), 'http://localhost:5380/AddPatient?addPatientContext=NewFromFragments');
//     // Click input[name="Surname"]
//     await page.locator('input[name="Surname"]').click();
//     // Fill input[name="Surname"]
//     await page.locator('input[name="Surname"]').fill('Doe');
//     // Click [placeholder="yyyy-mm-dd"]
//     await page.locator('[placeholder="yyyy-mm-dd"]').click();
//     // Click text=123 >> a >> nth=0
//     await page.locator('text=123 >> a').first().click();
//     // Select 102
//     await page.locator('select[name="Sex"]').selectOption('102');
//     // Click input[name="IdNumber"]
//     await page.locator('input[name="IdNumber"]').click();
//     // Fill input[name="IdNumber"]
//     await page.locator('input[name="IdNumber"]').fill('1234567891235');
//     // Click input[name="PhoneNumber"]
//     await page.locator('input[name="PhoneNumber"]').click();
//     // Fill input[name="PhoneNumber"]
//     await page.locator('input[name="PhoneNumber"]').fill('1234567891');
//     // Click button:has-text("Submit")
//     await page.locator('button:has-text("Submit")').click();
//     // Go to http://localhost:5380/session/8db8037762d048b0929e13d230df408e/Dashboard
//     await page.goto('http://localhost:5380/session/8db8037762d048b0929e13d230df408e/Dashboard');
//     // Click .fa-2x
//     await page.locator('.fa-2x').click();
//     // Click text=Logout
//     await page.locator('text=Logout').click();
//     // assert.equal(page.url(), 'http://localhost:5380/session/8db8037762d048b0929e13d230df408e');
//     // Close page
//     await page.close();
//   });
  
  
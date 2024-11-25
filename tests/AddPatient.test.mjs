import { test, expect } from '@playwright/test';
import { AddNewPatientPage } from '../playwright/pages/AddNewPatientPage';

test.describe('AddNewPatient Tests', () => {
  let page;
  let addNewPatientPage;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    addNewPatientPage = new AddNewPatientPage(page);
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('should add a new patient successfully', async ({}, testInfo) => {
    await addNewPatientPage.AddPatient();
    const screenshot = await page.screenshot();
    await testInfo.attach('AddNewPatient test screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });
    // Verification after adding patient
    await expect(page.locator('text=Patient added successfully')).toBeVisible();
  });

  test('should show validation errors for missing required fields', async () => {
    await addNewPatientPage.clearForm();
    await addNewPatientPage.submitForm();

    // Validate that the error messages are displayed for required fields
    await expect(page.locator('text=Name is required')).toBeVisible();
    await expect(page.locator('text=Date of birth is required')).toBeVisible();
  });

  test('should reset the form fields when the reset button is clicked', async () => {
    await addNewPatientPage.fillForm({
      name: 'John Doe',
      dob: '01/01/1990',
      contactNumber: '1234567890'
    });
    await addNewPatientPage.resetForm();

    // Verify that form fields are reset
    await expect(page.locator('#name')).toHaveValue('');
    await expect(page.locator('#dob')).toHaveValue('');
    await expect(page.locator('#contactNumber')).toHaveValue('');
  });

  test('should display an error for duplicate patient entries', async () => {
    // Add the same patient twice
    await addNewPatientPage.AddPatient({ name: 'Duplicate Name', dob: '01/01/1980' });
    await addNewPatientPage.AddPatient({ name: 'Duplicate Name', dob: '01/01/1980' });

    // Verify error for duplicate patient
    await expect(page.locator('text=Patient already exists')).toBeVisible();
  });

  test('should restrict invalid contact number', async () => {
    await addNewPatientPage.fillForm({
      name: 'Invalid Contact',
      dob: '01/01/1995',
      contactNumber: 'abcd1234'
    });
    await addNewPatientPage.submitForm();

    // Verify contact number validation message
    await expect(page.locator('text=Invalid contact number')).toBeVisible();
  });
});

import { expect } from "@playwright/test";

class UtilityMethods {
  constructor(page) {
    this.page = page;
  }

  async goTo(url) {
    await this.page.goto(url);
  }

  async getTitle() {
    return await this.page.title();
  }

  async locateFill(selector, value) {
    await this.page.waitForSelector(selector);
    await this.page.fill(selector, value);
  }

  async takeScreenshotAndAttach(description) {
    const screenshot = await this.page.screenshot();
    await this.attachScreenshot(description, screenshot);
  }

  async click(selector) {
    await this.page.click(selector);
  }

  async type(selector, text) {
    await this.page.type(selector, text);
  }

  async clickButtonByRoleAndName(role, name) {
    await this.page.getByRole(role, { name }).click();
  }

  async assertTextContent(selector, expectedText) {
    await this.page.waitForSelector(selector);
    const element = await this.page.$(selector);
    const textContent = await element.textContent();
    expect(textContent.trim()).toEqual(expectedText.trim()); // Adjust the assertion as needed
  }

  async SelectCheckbox(label, text, span) {
    await this.page
      .locator(label)
      .filter({ hasText: text })
      .locator(span)
      .click();
  }

  async waitForElementByRole(role) {
    await this.page.getByRole(role).click();
  }

  async fillInputByPlaceholder(placeholder, value) {
    const selector = `input[placeholder="${placeholder}"]`;
    await this.page.waitForSelector(selector);
    await this.page.fill(selector, value);
  }

  async clickElementByLabel(label) {
    await this.page.click(`[aria-label="${label}"]`);
  }

  async getDivValue(mydiv) {
    await this.page.waitForSelector(mydiv); // Replace with the actual selector of your <div> element
    const divValue = await this.page.$eval(mydiv, (div) => div.textContent);
    return divValue.trim(); // Trim to remove leading/trailing whitespace
  }

  async getElementByTitle(title) {
    return await this.page.$(`[title="${title}"]`);
  }

  async fillInputByLabel(label, value) {
    await this.page.fill(`[aria-label="${label}"]`, value);
  }
  // Add more common methods as needed
}

export default UtilityMethods;

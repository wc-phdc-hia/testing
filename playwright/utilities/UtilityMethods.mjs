import { expect } from "@playwright/test";

class UtilityMethods {
  constructor(page) {
    this.page = page;
  }

  async goTo(url) {
    await this.page.goto(url);
  }

  async getTitle() {
    return this.page.title();
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

  async fillInputByPlaceholder(placeholder) {
    this.page.locator(`[placeholder="${placeholder}"]`);
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
    return this.page.$(`[title="${title}"]`);
  }

  async fillInputByLabel(label, value) {
    await this.page.fill(`[aria-label="${label}"]`, value);
  }

  async clickByText(text) {
    await this.page.getByText(text).click();
  }

  async clickByName(text) {
    const element = this.page.locator(
      '[name="Model.SearchDetailsModel.ClinicomNumber"]'
    );
    await element.fill(text);
    await element.focus();
    await element.press("Enter");
  }

  async selectDropdownOption(selector, value) {
    await this.page.waitForSelector(selector);
    await this.page.locator(selector).selectOption(value);
  }

  async clickNthCheckbox(selector, index) {
    await this.page.locator(selector).nth(index).click();
  }

  async clickIcon(selector) {
    await this.page.locator(selector).first().click();
  }

  async getAttribute(selector, attribute) {
    await this.page.waitForSelector(selector);
    return this.page.$eval(
      selector,
      (element, attribute) => element.getAttribute(attribute),
      attribute
    );
  }

  async selectOptionByRole(role, name, option) {
    await this.page.getByRole(role, { name }).selectOption(option);
  }

  async fillByLabel(label, text) {
    await this.page.getByLabel(label).fill(text);
  }

  async fillInputById(id, value) {
    await this.page.fill(`#${id}`, value);
  }

  async clickElementById(id) {
    await this.page.click(`#${id}`);
  }

  // Add more common methods as needed
}

export default UtilityMethods;

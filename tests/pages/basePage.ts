import { Locator, Page } from '@playwright/test'

export default class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Common Method to navigate to the URL
    async navigateToUrl(url: string) {
        await this.page.goto(url);
    }

    // Common Method to click an element
    async clickElement(element: Locator) {
        await element.click();
    }

    // Common Method to fill out a form field
    async fillFormField(element: Locator, value: string) {
        await element.fill(value);
    }

    // Common Method to retrieve text from an element
    async getElementText(element: Locator) :  Promise<string> {
        return element.innerText();
    }

    // Common Method to wait for an element to be visible
    async waitForElementVisible(selector: string){
        await this.page.waitForSelector(selector, {state: 'visible'});
    }

    // Common Method to wait for an element to be hidden
    async waitForElementHidden(selector: string) {
        await this.page.waitForSelector(selector, {state: 'hidden'});
    }

    // Common Method to take a screenshot
    async takeScreenshot(fileName: string) {
        await this.page.screenshot({path: 'fileName'});
    }
}
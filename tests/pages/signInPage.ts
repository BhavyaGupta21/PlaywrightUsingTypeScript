import { Locator, Page } from "@playwright/test";
import BasePage from './basePage';

export class SignInPage extends BasePage {
    //readonly page: Page;
    readonly usernameTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly signInBtn: Locator;

    constructor(page:Page) {
        super(page);
        this.usernameTextBox = page.locator('input[placeholder="Username"]');
        this.passwordTextBox = page.locator('input[placeholder="Password"]');
        this.signInBtn = page.locator('button[type="submit"]');
    }

    async enterUsername(username:string) {
        await this.fillFormField(this.usernameTextBox, username)
    }

    async enterPassword(password:string) {
        await this.fillFormField(this.passwordTextBox, password)
    }

    async clickSignInBtn() {
        await this.clickElement(this.signInBtn);
    }
}
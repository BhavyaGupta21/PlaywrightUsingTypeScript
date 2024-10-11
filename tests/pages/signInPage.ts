import { Locator, Page } from "@playwright/test";

export class SignInPage {
    private readonly page: Page;
    private readonly usernameTextBox: Locator;
    private readonly passwordTextBox: Locator;
    private readonly signInBtn: Locator;

    constructor(page:Page) {
        this.usernameTextBox = page.locator('input[placeholder="Username"]');
        this.passwordTextBox = page.locator('input[placeholder="Password"]');
        this.signInBtn = page.locator('button[type="submit"]');
    }

    async enterUsername(emailId:string) {
        await this.usernameTextBox.fill(emailId);
    }

    async enterPassword(password:string) {
        await this.passwordTextBox.fill(password);
    }

    async clickSignInBtn() {
        await this.signInBtn.click();
    }
}
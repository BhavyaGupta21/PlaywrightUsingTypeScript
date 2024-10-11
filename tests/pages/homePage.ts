import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly accountBtn: Locator;
    readonly logoutBtn: Locator;

    constructor(page:Page) {
        this.accountBtn = page.locator('.oxd-userdropdown-tab');
        this.logoutBtn = page.locator('//a[normalize-space()="Logout"]');
    }

    async clickAccountBtn() {
        await this.accountBtn.click();
    }

    async clickLogoutBtn() {
        await this.logoutBtn.click();
    }
}
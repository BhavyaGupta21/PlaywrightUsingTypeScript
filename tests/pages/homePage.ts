import { Locator, Page } from "@playwright/test";

export class HomePage {
    private readonly page: Page;
    private readonly accountBtn: Locator;
    private readonly logoutBtn: Locator;

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
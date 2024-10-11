import { Locator, Page } from "@playwright/test";
import BasePage from './basePage';

export class HomePage extends BasePage {
    //readonly page: Page;
    readonly accountBtn: Locator;
    readonly logoutBtn: Locator;

    constructor(page:Page) {
        super(page);
        this.accountBtn = page.locator('.oxd-userdropdown-tab');
        this.logoutBtn = page.locator('//a[normalize-space()="Logout"]');
    }

    async clickAccountBtn() {
        await this.clickElement(this.accountBtn);
    }

    async clickLogoutBtn() {
        await this.clickElement(this.logoutBtn);
    }
}
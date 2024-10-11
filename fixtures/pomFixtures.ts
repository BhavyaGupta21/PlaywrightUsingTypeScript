import { test as baseTest } from '@playwright/test'
import {HomePage} from '../tests/pages/homePage'
import {SignInPage} from '../tests/pages/signInPage'

type pages = {
    signInPage: SignInPage;
    homePage: HomePage;
}

const testPages = baseTest.extend<pages>({
    signInPage: async({page}, use)=>{
        await use(new SignInPage(page));
    },
    homePage: async({page}, use)=>{
        await use(new HomePage(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;

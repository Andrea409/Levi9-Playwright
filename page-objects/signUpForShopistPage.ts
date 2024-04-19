import { Page, expect } from '@playwright/test';
import { HelperBase } from './helperBase';


export class SignUpForShopistPage extends HelperBase {

    constructor(page: Page){
        super(page)
    }

    async signUpForShopist(Firstname: string, Lastname: string, Email: string) {
        await this.page.getByText('SIGN UP FOR SHOP.IST').first().click();
        await this.page.locator('#fn-input').fill(Firstname); // Changed 'firstname' to variable Firstname
        await this.page.locator('#ln-input').fill(Lastname);
        await this.page.locator('#email-addr-input').fill(Email);
        await this.page.locator('.signup-button').first().click();
}
}
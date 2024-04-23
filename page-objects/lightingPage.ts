import { Page, expect } from '@playwright/test';
import { HelperBase } from './helperBase';


export class LightingPage extends HelperBase {

    constructor(page: Page){
        super(page)
    }

    async AdjustableWallLamp() {
        const element = this.page.locator('div:nth-child(9) > div > a');
        await element.click(); 
    }

    async ScrollToElement() {
        const element = this.page.locator('div:nth-child(9) > div > a');
        await element.scrollIntoViewIfNeeded();
    }
    async AddToElement(){
        await this.page.locator('.description').getByText("Add to cart").click()
    }
    async Card(){
        await this.page.locator('.menu-item-large').getByText("Cart (1)").click()
    }
    async Plus(){
        await this.page.getByText("+").click()
    }
    async Price(){
        this.page.locator('.product-price').click()
    }
}


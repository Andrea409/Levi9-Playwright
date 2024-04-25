import { Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class LightingPage extends HelperBase {

    constructor(page: Page){
        super(page)
    }
    async clickOnAdjustableWallLampProduct() {
        const element = this.page.locator('div:nth-child(9) > div > a');
        await element.click(); 
    }
     async scrollToProductElement() {
        const element = this.page.locator('div:nth-child(9) > div > a');
        await element.scrollIntoViewIfNeeded();
    }
    async clickOnAddToElementButton(){
        await this.page.locator('.description').getByText("Add to cart").click()
    }
    async navigateToCartPage(){
        await this.page.locator('.menu-item-large').getByText("Cart (1)").click()
    }
    async clickOnQuantityIncreaseButton(){
        await this.page.getByText("+").click()
    }
   
}


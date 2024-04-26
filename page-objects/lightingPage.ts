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
    async extractContentFromInitialPrice(){
        const initialPrice = await this.page.locator('.price').innerText()
         return initialPrice 
    }
    async extractContentFromPriceElementInCartPage(){
        const productPriceDisplayedOnCartPage = await this.page.locator('.product-price').innerText()
        return productPriceDisplayedOnCartPage
    }
    async extractContentAfterIncreasingNumberOfProducts(){
        const elementAfterIncreasingQuantityProducts = await this.page.locator('.product-price').innerText()
        return elementAfterIncreasingQuantityProducts
    }
 
}


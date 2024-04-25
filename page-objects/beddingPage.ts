import { Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class BeddingPage extends HelperBase {

    constructor(page: Page){
        super(page)
    }
    async clickOnWhiteLinenDuvetCover(){
        await this.page.locator('.product-card-container > div > a').first().click()
    }
    async clickOnAddToCartButton(){
        await this.page.getByText("Add to cart").click()
    }
    async navigateToCartButton(){
        await this.page.getByText("Cart (1)").first().click()
    }
    async clickOnRemoveButton(){
        await this.page.getByText("Remove").click()
    }
    async TextAfterRemoveAllProducts(){
       const RemoveText =  this.page.getByText("Your cart is currently empty.").innerText()
       return RemoveText
    }
}
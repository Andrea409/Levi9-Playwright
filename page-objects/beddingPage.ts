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
    async appearsTextAfterRemoveAllProducts(){
       const RemoveText = this.page.locator('.no-products').getByText("Your cart is currently empty.")
       const textAfterRemove = await RemoveText.innerText()
       return textAfterRemove
    }
    async clickOnQuantityIncreaseButton(){
        await this.page.getByText("+").click()
    }
    async clickOnReduceProductCountButton(){
        await this.page.getByText("-").click()
    }
    async EctractContentFromInitialPriceElement() {
    const initialPrice = await this.page.getByText('$').innerText()
    }
}







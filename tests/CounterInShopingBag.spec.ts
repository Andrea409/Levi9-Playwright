import {test, expect} from '@playwright/test'
import {NavigationPage } from '../page-objects/navigationPage'
import {BeddingPage} from '../page-objects/beddingPage'



test.beforeEach(async ({page})=>{
    
    await page.goto('https://www.shopist.io/')
    
    })
    
    test('Counter in shopping bag', async ({ page }) => {
        
        const navigateTo = new NavigationPage(page);
        const onBeddingPage = new BeddingPage(page);

        //navigate to Shop Now page 
        await navigateTo.shopNowPage()
        //navigate to Bedding page
        await navigateTo.beddingPage()
        //Click on the White Linen Duvet Cover 
        await onBeddingPage.clickOnWhiteLinenDuvetCover()
        //Click on the Add to Cart button
        await onBeddingPage.clickOnAddToCartButton()
        //Navigate ti Cart page
        await onBeddingPage.navigateToCartButton()
        //Click on the Quantity increase button 
        await onBeddingPage.quantityIncreaseButton()
        //Click on Reduce Poroduct Count button 
        await onBeddingPage.reduceProductCountButton()
        
       //assertation- 
       // expect(await onBeddingPage.appearsTextAfterRemoveAllProducts()).toContain('Your cart is currently empty.')
    }  
   
)
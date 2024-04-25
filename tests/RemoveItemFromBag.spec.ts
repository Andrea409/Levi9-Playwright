import {test, expect} from '@playwright/test'
import {NavigationPage } from '../page-objects/navigationPage'
import {BeddingPage} from '../page-objects/beddingPage'



test.beforeEach(async ({page})=>{
    
    await page.goto('https://www.shopist.io/')
    })
    
    test('Remove item from the shopping bag', async ({ page }) => {
        
        const navigateTo = new NavigationPage(page);
        const onBeddingPage = new BeddingPage(page);

        //navigate to MyProfilePage
        await navigateTo.beddingPage()

        //Click on the White Linen Duvet Cover
        await onBeddingPage.clickOnWhiteLinenDuvetCover()

        //Click on the 'Add To Cart' button
        await onBeddingPage.clickOnAddToCartButton()

        //Navigate to Cart page
        await onBeddingPage.navigateToCartButton()

        //Remove products from cart 
        await onBeddingPage.clickOnRemoveButton()
       
        //assertation- Verify whether the products have been successfully deleted.
        expect(await onBeddingPage.appearsTextAfterRemoveAllProducts()).toContain('Your cart is currently empty.')
    }  
   
)



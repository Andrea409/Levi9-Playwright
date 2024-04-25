import {test, expect} from '@playwright/test'
import {NavigationPage } from '../page-objects/navigationPage'
import {BeddingPage} from '../page-objects/beddingPage'



test.beforeEach(async ({page})=>{
    
    await page.goto('https://www.shopist.io/')
    })
    
    test('Counter in shopping bag', async ({ page }) => {
        
        const navigateTo = new NavigationPage(page);
        const onBeddingPage = new BeddingPage(page);

        //navigate to MyProfilePage
        await navigateTo.beddingPage()
        await onBeddingPage.clickOnWhiteLinenDuvetCover()
        await onBeddingPage.clickOnAddToCartButton()
        await onBeddingPage.navigateToCartButton()
        
       
       // expect(await onBeddingPage.appearsTextAfterRemoveAllProducts()).toContain('Your cart is currently empty.')
    }  
   
)
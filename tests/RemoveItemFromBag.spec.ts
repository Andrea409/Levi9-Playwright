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
        await onBeddingPage.clickOnWhiteLinenDuvetCover()
        await onBeddingPage.clickOnAddToCartButton()
        await onBeddingPage.navigateToCartButton()
        await onBeddingPage.clickOnRemoveButton()
       
        expect(onBeddingPage.TextAfterRemoveAllProducts()).toContain('Your cart is currently empty.')
    }  
   
)// expect(await onMyProfilePage.locateBannerText()).toContain('Please enter a lastname')



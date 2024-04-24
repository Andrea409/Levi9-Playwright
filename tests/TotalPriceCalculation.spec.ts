import {test, expect} from '@playwright/test'
import {NavigationPage } from '../page-objects/navigationPage'
import {LightingPage } from '../page-objects/lightingPage'


test.beforeEach(async ({page})=>{
    
    await page.goto('https://www.shopist.io/')
})
test('navigate to chairs page', async ({page})=>{
    const navigateTo = new NavigationPage(page)
    await navigateTo.chairsPage()
    await navigateTo.sofasPage()
    await navigateTo.beddingPage()
    await navigateTo.lightingPage()
    await navigateTo.myProfilePage()
    await navigateTo.cartPage()
    await navigateTo.shopNowPage()
    await navigateTo.signUpForShopist()
    })
    
    test('total price calculation', async ({ page }) => {
        const navigateTo = new NavigationPage(page);
        const onLightingPage = new LightingPage(page);
    
        //Navigate to lightting page
        await navigateTo.lightingPage();

        //scroll to product
        await onLightingPage.scrollToProductElement()

        //click on the product
        await onLightingPage.ClickOnAdjustableWallLampProduct();

        //Click on the "Add to element" button
        await onLightingPage.clickOnAddToElementButton()

        //navigate to card page
        await onLightingPage.navigateToCard()

        //Click on the quantity increase button 
        await onLightingPage.quantityIncreaseButton()
        
        //Checking the equality of prices at different locations
        expect(await onLightingPage.contentOfPriceElement()).toEqual(await onLightingPage.contentOfpriceProductElement())

        //Checking the value when multiplied by 2
        expect(await onLightingPage.Price2()).toEqual(await onLightingPage.priceProduct2())

        
    
        
           
          
}
    )
        
       
        
    
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
    
        await navigateTo.lightingPage();
        await onLightingPage.ScrollToElement();
        await onLightingPage.AdjustableWallLamp();
        await onLightingPage.AddToElement()

        expect(await onLightingPage.Price()).toEqual(await onLightingPage.priceProduct())
       
        await onLightingPage.Card()
        await onLightingPage.Plus()
        
        //const price = await page.getByText('420.60').textContent()
           console.log(await onLightingPage.Price())
        
       
        
    }); 
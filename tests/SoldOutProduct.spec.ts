import {test, expect} from '@playwright/test'
import {NavigationPage } from '../page-objects/navigationPage'
import {ChairsPage } from '../page-objects/chairsPage'



    test.beforeEach(async ({page})=>{
    
    await page.goto('https://www.shopist.io/')
})

test('Check sold out product', async ({ page }) => {
        const navigateTo = new NavigationPage(page);
        const onChairsPage = new ChairsPage(page);

       // navigate to ChairsPage
        await navigateTo.chairsPage()
        
        //scroll to product
        await onChairsPage.ScrollToElement()  
        
        //Clicking on the element
        await onChairsPage.UpholsteredBlackBarstool() 
       
         //Getting the text of the window
        const message = await (await onChairsPage.errorDialogBox()).textContent();
         
        //assertation
         expect(message).toContain("Oops! This item is sold out. It can't be added to your cart. We'll let you know when this item is back in stock.");
    })
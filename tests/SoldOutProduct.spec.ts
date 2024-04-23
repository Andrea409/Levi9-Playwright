import {test, expect} from '@playwright/test'
import {NavigationPage } from '../page-objects/navigationPage'
import {ChairsPage } from '../page-objects/chairsPage'



    test.beforeEach(async ({page})=>{
    
    await page.goto('https://www.shopist.io/')
    })

        test('Check sold out product', async ({ page }) => {
        
        const navigateTo = new NavigationPage(page);
        const onChairsPage = new ChairsPage(page);

        await navigateTo.chairsPage()
        
        await onChairsPage.ScrollToElement()   // Scroll to element
        await onChairsPage.UpholsteredBlackBarstool() //Clicking on the element

        //The error window element
        const window = await page.locator('.modal-sold-out-content').first();
        
        
        //Getting the text of the error window
        const message = await window.textContent();
        
        
        expect(message).toContain("Oops! This item is sold out. It can't be added to your cart. We'll let you know when this item is back in stock.");

    })
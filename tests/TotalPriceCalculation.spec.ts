import {test, expect} from '@playwright/test'
import {NavigationPage } from '../page-objects/navigationPage'
import {LightingPage } from '../page-objects/lightingPage'


test.beforeEach(async ({page})=>{
    
    await page.goto('https://www.shopist.io/')
})
test('navigate to chairs page', async ({page})=>{
    const navigateTo = new NavigationPage(page)
    await navigateTo.lightingPage()
 })
    
    test('total price calculation', async ({ page }) => {
        const navigateTo = new NavigationPage(page);
        const onLightingPage = new LightingPage(page);
    
        //Navigate to lightting page
        await navigateTo.lightingPage();

        //scroll to product
        await onLightingPage.scrollToProductElement()

        //click on the product
        await onLightingPage.clickOnAdjustableWallLampProduct();
       
        //Get the value of the first element.
        const firstPrice = await page.locator('.price').innerText() 
        console.log("FIRST PRICE:", firstPrice)

        //Click on the "Add to element" button
        await onLightingPage.clickOnAddToElementButton()

        //navigate to card page
        await onLightingPage.navigateToCartPage()

        //Get the value of the second element.
        const priceInCartPage = await page.locator('.product-price').innerText()

        //Displaying the value
        console.log("value of element from the cart page", priceInCartPage )

       // Removing the $ sign
        const numericPrice = priceInCartPage.replace(/[^\d.]/g, '');

        //Displaying the value
        console.log("Removing the $ sign", numericPrice)

        // Parsing the string into a number
        const priceElementValue = parseFloat(numericPrice);
        
        // The value of priceElementValue multiplied by 2
        const expectedValue = priceElementValue * 2;
        
        //Displaying the value
        console.log("The value of priceElementValue multiplied by 2", expectedValue); // Ovo bi trebalo da ispiše 420
       
        // assertation - Checking the equality of elements between price and priceElement
        expect(priceInCartPage).toEqual(firstPrice)

        //Click on the quantity increase button 
        await onLightingPage.clickOnQuantityIncreaseButton()
        
        //Obtaining the value of the priceElement element after adding the product
        const price3 = await page.locator('.product-price').innerText()

        //Removing the $ sign
         const numericPrice3 = price3.replace(/[^\d.]/g, '');

         //Displaying the value
         console.log("Third value without $ sign", numericPrice3)

        // Parsing the string into a number
        const price3Value = parseFloat(numericPrice3);

        // assertation - Checking the value when multiplied by 2
        expect(expectedValue).toEqual(price3Value)
        
        
    
     
           
          
}
    )
        
       
        
    
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
        await onLightingPage.clickOnAdjustableWallLampProduct()
       
        //Get the value of the first element.
        const initialPrice = await onLightingPage.extractContentFromInitialPrice()
        
        //Displaying the value 
        console.log("The actual price of the one product", initialPrice)

        //Click on the "Add to element" button
        await onLightingPage.clickOnAddToElementButton()

        //navigate to card page
        await onLightingPage.navigateToCartPage()

        //Get the value of the second element.
        const productPriceDisplayedOnCartPage = await onLightingPage.extractContentFromPriceElementInCartPage()

        //Displaying the value
        console.log("The display of the product price when added to the cart", productPriceDisplayedOnCartPage)

       // Removing the $ sign
        const initialPriceWithoutDollarSign = productPriceDisplayedOnCartPage.replace(/[^\d.]/g, '');

        // Parsing the string into a number
        const productPriceDisplayedOnCartPageParseValue = parseFloat(initialPriceWithoutDollarSign);
        
        // The value of priceElementValue multiplied by 2
        const multipliedPrice = productPriceDisplayedOnCartPageParseValue * 2;
        
        //Displaying the value multiplied by 2
        console.log("The value of priceElementValue multiplied by 2", multipliedPrice); 
       
        // assertation - Checking the equality of elements between price and priceElement
        expect(productPriceDisplayedOnCartPage).toEqual(initialPrice)

        //Click on the quantity increase button 
        await onLightingPage.clickOnQuantityIncreaseButton()
        
        //Obtaining the value of the priceElement element after adding the product
        const priceAfterIncreasingQuantityProducts = await onLightingPage.extractContentAfterIncreasingNumberOfProducts()

        //Removing the $ sign
         const increasedPriceWithoutDollarSign = priceAfterIncreasingQuantityProducts.replace(/[^\d.]/g, '');

         // Parsing the string into a number
        const priceAfterIncreasingQuantityProductsParseValue = parseFloat(increasedPriceWithoutDollarSign);

        // assertation - Checking the value when multiplied by 2
        expect(multipliedPrice).toEqual(priceAfterIncreasingQuantityProductsParseValue)
        }
    )
        
       
        
    
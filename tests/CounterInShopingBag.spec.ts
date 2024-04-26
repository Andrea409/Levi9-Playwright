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

        //price before cart page 
        const initialPrice = await onBeddingPage.ectractContentFromInitialPriceElement()

        // Removing the $ sign
        const initialPriceWithoutDollarSign = initialPrice.replace(/[^\d.]/g, '')

        // Parsing the string into a number
        const parseValue = parseFloat(initialPriceWithoutDollarSign);

        // The value of priceElementValue multiplied by 2
        const initialValueMultipledBy2 = parseValue * 2

        //Displaying the value
        console.log("Initial value mulitplied by 2", initialValueMultipledBy2)

        //Click on the Add to Cart button
        await  onBeddingPage.clickOnAddToCartButton()

        //Navigate ti Cart page
        await onBeddingPage.navigateToCartButton()

        //Click on the Quantity increase button 
        await onBeddingPage.clickOnQuantityIncreaseButton()

         //price In the cart page 
        const priceInTheCart = await onBeddingPage.ectractValueFromPricePriceInTheCart()
        
        // Removing the $ sign
        const deletedDollarSignFromPriceInTheCartValue = priceInTheCart.replace(/[^\d.]/g, '')

        // Parsing the string into a number
        const parsePriceFromCart = parseFloat(deletedDollarSignFromPriceInTheCartValue)
       
        //assertation-Validation of price correctness after adding a product
        expect(initialValueMultipledBy2).toEqual(parsePriceFromCart)

        //Click on Reduce Poroduct Count button 
        await onBeddingPage.clickOnReduceProductCountButton()

        //Value of element after click on reduce button
        const reducePrice = await onBeddingPage.extracPriceAfterDecreaseNumberOfProducts()
        
        //assertation-Verification of equality between initial and reduced prices.
        expect(initialPrice).toEqual(reducePrice)
    }
   
)


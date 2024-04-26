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
        const initialPrice = await page.getByText('$').innerText()

        // Removing the $ sign
        const priceWithout$sign = initialPrice.replace(/[^\d.]/g, '');

        // Parsing the string into a number
        const parseValue = parseFloat(priceWithout$sign);

        // The value of priceElementValue multiplied by 2
        const initialValueMultiple2 = parseValue * 2;

        //Displaying the value
        console.log(initialValueMultiple2)

        //Click on the Add to Cart button
        await onBeddingPage.clickOnAddToCartButton()

        //Navigate ti Cart page
        await onBeddingPage.navigateToCartButton()

        //Click on the Quantity increase button 
        await onBeddingPage.clickOnQuantityIncreaseButton()

         //price In the cart page 
        const priceInTheCart = await page.getByText('$').nth(1).innerText()
        
        // Removing the $ sign
        const deleted$Value = priceInTheCart.replace(/[^\d.]/g, '');

        // Parsing the string into a number
        const parsePricePriceFromCart = parseFloat(deleted$Value)
        
        //Displaying the value
        console.log(parsePricePriceFromCart)
       
        //assertation-Validation of price correctness after adding a product
        expect(initialValueMultiple2).toEqual(parsePricePriceFromCart)

        //Click on Reduce Poroduct Count button 
        await onBeddingPage.clickOnReduceProductCountButton()

        //Value of element after click on reduce button
        const reducePrice = await page.getByText('$').nth(1).innerText()
        
        //assertation-Verification of equality between initial and reduced prices.
        expect(initialPrice).toEqual(reducePrice)

        //Displaying the value
        console.log(reducePrice)

        //Displaying the value
        console.log(initialPrice)
       
    }
   
)


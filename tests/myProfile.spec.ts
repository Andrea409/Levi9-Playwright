import {test, expect} from '@playwright/test'
import {NavigationPage } from '../page-objects/navigationPage'
import {MyProfilePage} from '../page-objects/myProfilePage'



test.beforeEach(async ({page})=>{
    
    await page.goto('https://www.shopist.io/')
    })
    
    test('Check sold out product', async ({ page }) => {
        
        const navigateTo = new NavigationPage(page);
        const onMyProfilePage = new MyProfilePage(page);

        //navigate to MyProfilePage
        await navigateTo.myProfilePage()

        //Click on 'EDIT PROFILE' button
        await onMyProfilePage.clickOnEditProfileButton() 

        //Data entry for the first name field
        await onMyProfilePage.fillFirstNameInputField()
        
        //Deleted entry for the last name field
         await onMyProfilePage.fillLastNameInputField()

        //Data entry for the adress field
        await onMyProfilePage.fillAdress1InputField()

        //Data entry for the adress2 field.
        await onMyProfilePage.fillAdress2InputField()

        //Data entry for the City field.
        await onMyProfilePage.fillCityInputField()

        //Data entry for the Zipcode field.
        await onMyProfilePage.fillZipCodeInputField()

        //Data entry for the Mobile phone number field.
        await onMyProfilePage.fillPhoneNumberField()

        //Selecting a value from a list.
        await onMyProfilePage.selectStateField("DE")

        //Click on the 'SAVE PROFILE' button
        await onMyProfilePage.clickOnSaveProfileButton()

        //assertation
        expect(await onMyProfilePage.locateBannerText()).toContain('View updated profile');
       
    })
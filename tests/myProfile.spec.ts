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
        await onMyProfilePage.editProfileButton() 

        //Data entry for the first name field
        await onMyProfilePage.firstNameField()

        //Data entry for the last name field
        await onMyProfilePage.lastNameField()

        //Data entry for the adress field
        await onMyProfilePage.adress1Field()

        //Data entry for the adress2 field.
        await onMyProfilePage.adress2Field()

        //Data entry for the City field.
        await onMyProfilePage.CityField()

        //Data entry for the Zipcode field.
        await onMyProfilePage.zipCodeField()

        //Data entry for the Mobile phone number field.
        await onMyProfilePage.phoneNumberField()

        //Selecting a value from a list.
        await onMyProfilePage.selectStateField("DE")

        //Click on the 'SAVE PROFILE' button
        await onMyProfilePage.saveProfileButton()

        //assertation
        expect(await onMyProfilePage.bannerText()).toContain('View updated profile');
       
    })
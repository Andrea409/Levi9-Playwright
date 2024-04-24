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
        await onMyProfilePage.editProfile() 

        //Data entry for the first name field
        await onMyProfilePage.firstName()

        //Data entry for the last name field
        await onMyProfilePage.lastName()

        //Data entry for the adress field
        await onMyProfilePage.adress1()

        //Data entry for the adress2 field.
        await onMyProfilePage.adress2()

        //Data entry for the City field.
        await onMyProfilePage.City()

        //Data entry for the Zipcode field.
        await onMyProfilePage.zipCode()

        //Data entry for the Mobile phone number field.
        await onMyProfilePage.phoneNumberField()

        //Selecting a value from a list.
        await onMyProfilePage.state("DE")

        //Click on the 'SAVE PROFILE' button
        await onMyProfilePage.SaveProfileButton()

        //assertation
        expect(await onMyProfilePage.BannerText()).toContain('View updated profile');
       
    })
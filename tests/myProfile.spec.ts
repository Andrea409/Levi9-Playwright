import {test, expect} from '@playwright/test'
import {NavigationPage } from '../page-objects/navigationPage'
import {MyProfilePage} from '../page-objects/myProfilePage'



test.beforeEach(async ({page})=>{
    
    await page.goto('https://www.shopist.io/')
    })


    
    test('Check sold out product', async ({ page }) => {
        
        const navigateTo = new NavigationPage(page);
        const onMyProfilePage = new MyProfilePage(page);

        await navigateTo.myProfilePage()
        await onMyProfilePage.editProfile() 
        await onMyProfilePage.firstName()
        await onMyProfilePage.lastName()
        await onMyProfilePage.adress1()
        await onMyProfilePage.adress2()
        await onMyProfilePage.City()
        await onMyProfilePage.zipCode()
        await onMyProfilePage.phoneNumberField()
        await onMyProfilePage.state("DE")
        await onMyProfilePage.SaveProfile()

        const bannerText = await onMyProfilePage.BannerText()
        expect(bannerText).toContain('Profile successfully saved. View updated profile')
       
    })
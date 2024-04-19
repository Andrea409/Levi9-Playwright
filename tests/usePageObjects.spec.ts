import {test, expect} from '@playwright/test'
import {NavigationPage } from '../page-objects/navigationPage'
import {SignUpForShopistPage } from '../page-objects/signUpForShopistPage'



test.beforeEach(async ({page})=>{
    await page.goto('https://www.shopist.io/')
})


test('navigate to chairs page', async ({page})=>{
const navigateTo = new NavigationPage(page)
await navigateTo.chairsPage()
await navigateTo.sofasPage()
await navigateTo.beddingPage()
await navigateTo.lightingPage()
await navigateTo.myProfilePage()
await navigateTo.cartPage()
await navigateTo.shopNowPage()
await navigateTo.signUpForShopist()
})

test('parametrised sign up method', async ({ page }) => {
    const navigateTo = new NavigationPage(page);
    const onSignUpForShopistPage = new SignUpForShopistPage(page);

    await navigateTo.signUpForShopist();
    await onSignUpForShopistPage.signUpForShopist('Andrea', 'Milosevic', 'andre@gmail.com');
}
)

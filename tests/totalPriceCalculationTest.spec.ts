import {test, expect} from '@playwright/test'
import {NavigationPage } from '../page-objects/navigationPage'
import { LightingPage } from '../page-objects/lightingPage'





test.beforeEach(async ({page})=>{
    
    await page.goto('https://www.shopist.io/')
})

test('total price caclculation', async ({page})=>{

    const navigateTo = new NavigationPage(page)
    const onLightingPage = new LightingPage(page)

    await navigateTo.lightingPage();
    scroll
    await onLightingPage.adjustableWallLampElement();
})
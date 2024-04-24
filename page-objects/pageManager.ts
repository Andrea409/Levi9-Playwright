import { Page, expect } from '@playwright/test';
import { NavigationPage } from "./navigationPage"
import { ChairsPage } from "./chairsPage"
import { SofasPage } from "./sofasPage"
import { BeddingPage } from "./beddingPage"
import { LightingPage } from "./lightingPage"
import { MyProfilePage } from "./myProfilePage"
import { CartPage } from "./cartPage"
import { ShopNowPage } from "./shopNowPage"
import{SignUpForShopistPage} from "./signUpForShopistPage"



export class PageManager {
private readonly page: Page
private readonly navigationPage: NavigationPage
private readonly chairsPage: ChairsPage
private readonly sofasPage: SofasPage
private readonly beddingPage: BeddingPage
private readonly lightingPage: LightingPage
private readonly myProfilePage: MyProfilePage
private readonly cartPage: CartPage
private readonly shopNowPage:ShopNowPage
private readonly signUpForShopistPage:SignUpForShopistPage

constructor(page: Page ){
    this.page = page
    this.navigationPage = new NavigationPage(this.page)
    this.chairsPage= new ChairsPage(this.page)
    this.sofasPage=new SofasPage(this.page)
    this.beddingPage = new BeddingPage(this.page)
    this.lightingPage = new LightingPage(this.page)
    this.myProfilePage = new MyProfilePage(this.page)
    this.cartPage = new CartPage(this.page)
    this.shopNowPage = new ShopNowPage(this.page)
    this.signUpForShopistPage = new SignUpForShopistPage(this.page)

}

navigateTo(){
    return this.navigationPage
}

OnChairsPage(){
    return this.chairsPage
}
OnSofasPage(){
    return this.sofasPage
}

onBeddingPage(){
    return this.beddingPage
}
OnLightingPage(){
    return this.lightingPage
}
OnMyProfilePage(){
    return this.myProfilePage
}
OnCartPage(){
    return this.cartPage
}
OnShopingNowPage(){
    return this.shopNowPage
}
OnSignUpForShopist(){
    return this.signUpForShopistPage
}


}

import { Page, expect } from '@playwright/test';
import { HelperBase } from './helperBase';

export class NavigationPage extends HelperBase {
    
    

    constructor(page: Page){
        super(page)
    }

    async chairsPage(){
        await this.page.getByText('CHAIRS').first().click()
    }

    async sofasPage(){
        await this.page.getByText('SOFAS').first().click()
    }

    async beddingPage(){
        await this.page.getByText('BEDDING').first().click()
    }

    async lightingPage(){
        await this.page.getByText('LIGHTING').first().click()
    }

    async myProfilePage(){
        await this.page.getByText('MY PROFILE').first().click()
    }

    async cartPage(){
        await this.page.getByText('CART').first().click()
    }

    async shopNowPage(){
        await this.page.getByText('Shop now').first().click()
    }
    async signUpForShopist(){
        await this.page.getByText('SIGN UP FOR SHOP.IST').first().click()
    }


    }




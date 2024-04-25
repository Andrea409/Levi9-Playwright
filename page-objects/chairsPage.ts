import { Page } from '@playwright/test';
import { HelperBase } from './helperBase';



export class ChairsPage extends HelperBase {

    constructor(page: Page){
        super(page)
    }
    async UpholsteredBlackBarstool(){
        await this.page.locator('[class="product-card-container"]').filter({hasText: 'Upholstered Black Barstool'}).click()
        
        
    }
     async ScrollToElement() {
    
        const element1 = this.page.getByText("Upholstered Black Barstool")
        await element1.scrollIntoViewIfNeeded();
    }

    async errorDialogBox(){
        return this.page.locator('.modal-sold-out-content').first();
    }

    
    
}
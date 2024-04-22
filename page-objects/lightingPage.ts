import { Page, expect } from '@playwright/test';
import { HelperBase } from './helperBase';


export class LightingPage extends HelperBase {

    constructor(page: Page){
        super(page)
    }
    async adjustableWallLampElement(){
         const adjustableWallElement =  await this.page.$('img[src="/_nuxt/img/36.072c7ee.jpg"]');
    }
}
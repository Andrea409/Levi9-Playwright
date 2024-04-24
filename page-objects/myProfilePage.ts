import { Page, expect } from '@playwright/test';
import { HelperBase } from './helperBase';


export class MyProfilePage extends HelperBase {

    constructor(page: Page){
        super(page)
    }


    async editProfile(){
        await this.page.getByText("Edit Profile").click()
    }

    async firstName(){
        await this.page.locator('#firstname').fill('Andrea')
    }
    async lastName(){
        await this.page.locator('#lastname').fill('Milsevic')
    }
    async adress1(){
        await this.page.locator('#address1').fill('Ljubovija')
    }
    async adress2(){
        await this.page.locator('#address2').fill('Beograd')
    }
    async City(){
        await this.page.locator('#addressCity').fill('NovI Sad')

    }
    async zipCode(){
        await this.page.locator('#addressZipcode').fill('15320')

    }
    async phoneNumberField(){
        await this.page.locator('#phone').fill('+38164333961')

    }
    async state(stateTitle:string){
       const inputElement = await this.page.waitForSelector('[aria-labelledby="vs1__combobox"]');
       await inputElement.click()
       await this.page.locator('li[role="option"]', {hasText: stateTitle}).click()
    }
    async SaveProfile(){
      await this.page.getByText("Save profile").click()

    }
    async BannerText() {
        const successText = await this.page.locator('.success.banner').textContent()
        
        const nesto = successText?.replace(/\s+/g, '')

        console.log(successText)
        return nesto

    }
    

}
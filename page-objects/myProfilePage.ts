
import { Page } from '@playwright/test';
import { HelperBase } from './helperBase';
import { faker } from '@faker-js/faker';

export class MyProfilePage extends HelperBase {

    constructor(page: Page){
        super(page)
    }
    async clickOnEditProfileButton(){
        await this.page.getByText("Edit Profile").click()
    }
    async fillFirstNameInputField(){
        await this.page.locator('#firstname').fill(faker.person.firstName())
    }
    async fillLastNameInputField(){
        await this.page.locator('#lastname').fill(faker.person.lastName())
    }
    async deleteLastNameInputField(){
        await this.page.locator('#lastname').clear()
    }
    async fillAdress1InputField(){
        await this.page.locator('#address1').fill(faker.location.city())
    }
    async fillAdress2InputField(){
        await this.page.locator('#address2').fill(faker.location.city())
    }
    async fillCityInputField(){
        await this.page.locator('#addressCity').fill(faker.location.city())
    }
    async fillZipCodeInputField(){
        await this.page.locator('#addressZipcode').fill(faker.address.zipCode())
     }
    async fillPhoneNumberField(){
        await this.page.locator('#phone').fill(faker.phone.number())
     }
    async selectStateField(stateTitle:string){
       const inputElement = await this.page.waitForSelector('[aria-labelledby="vs1__combobox"]');
       await inputElement.click()
       await this.page.locator('li[role="option"]', {hasText: stateTitle}).click()
    }
    async clickOnSaveProfileButton(){
      await this.page.getByText("Save profile").click()
    }
    async locateBannerText() {
         const element = this.page.getByText("Please enter a lastname");
         const text = await element.innerText();
         return text;

    }
    

}
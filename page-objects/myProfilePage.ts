import { Page } from '@playwright/test';
import { HelperBase } from './helperBase';
import { faker } from '@faker-js/faker';

export class MyProfilePage extends HelperBase {

    constructor(page: Page){
        super(page)
    }
    async editProfileButton(){
        await this.page.getByText("Edit Profile").click()
    }
    async firstNameField(){
        await this.page.locator('#firstname').fill(faker.person.firstName())
    }
    async lastNameField(){
        await this.page.locator('#lastname').fill(faker.person.lastName())
    }
    async adress1Field(){
        await this.page.locator('#address1').fill(faker.location.city())
    }
    async adress2Field(){
        await this.page.locator('#address2').fill(faker.location.city())
    }
    async CityField(){
        await this.page.locator('#addressCity').fill(faker.location.city())
    }
    async zipCodeField(){
        await this.page.locator('#addressZipcode').fill(faker.address.zipCode())
     }
    async phoneNumberField(){
        await this.page.locator('#phone').fill(faker.phone.number())
     }
    async selectStateField(stateTitle:string){
       const inputElement = await this.page.waitForSelector('[aria-labelledby="vs1__combobox"]');
       await inputElement.click()
       await this.page.locator('li[role="option"]', {hasText: stateTitle}).click()
    }
    async saveProfileButton(){
      await this.page.getByText("Save profile").click()
    }
    async bannerText() {
         const element = this.page.locator('.inline-link').getByText("View updated profile");
         const text = await element.innerText();
         return text;

    }
    

}
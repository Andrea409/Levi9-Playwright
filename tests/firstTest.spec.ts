import {test} from '@playwright/test'


test.describe('Couch Cache', ()=>{

test.beforeEach(async({page})=>{
    await page.goto('https://www.shopist.io/')
})


test('Chairs',async ({page})=>{
await page.getByText('CHAIRS').first().click()
})

test('Sofas',async ({page})=>{
    await page.getByText('SOFAS').first().click()
    })

    test('Bedding',async ({page})=>{
        await page.getByText('BEDDING').first().click()
        })

        test('Lighting',async ({page})=>{
            await page.getByText('LIGHTING').first().click()
            })

            test('My profile',async ({page})=>{
                await page.getByText('My Profile').first().click()
                })

                test('Cart',async ({page})=>{
                    await page.getByText('CART').first().click()
                    })

                    test('Shop now',async ({page})=>{
                        await page.getByText('SHOP NOW').first().click()
                        })

                        test('Sign up for shop.ist',async ({page})=>{
                            await page.getByText('SIGN UP FOR SHOP.IST').first().click()
                            })
                        }
)


import { Page, expect } from '@playwright/test';
import { HelperBase } from './helperBase';


export class ChairsPage extends HelperBase {

    constructor(page: Page){
        super(page)
    }
}
import { Locator } from "@playwright/test";
import { ProductItemComponent } from "./ProductItemComponent";

export class PageBodyComponent{
    public static selector: string = '.page-body';

    constructor(private component: Locator){
        this.component = component;
    }

async productItemComponentList(): Promise<ProductItemComponent[]>{
    const productItemComps = await this.component.locator(ProductItemComponent.selector).all();
    return productItemComps.map(locator => new ProductItemComponent(locator));
}

    
}
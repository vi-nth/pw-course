import { Locator } from "@playwright/test";
import { InformationColumnComponent } from "./InformationColumnsComponent";
import { CustomerServiceColumnComponent } from "./CustomerServiceColumnComponent";

export class FooterComponent {

    public static selector: string = '.footer';

    constructor(private component: Locator) {
        this.component = component;
    }

    informationColumnComponent(): InformationColumnComponent {
        const compSel = InformationColumnComponent.selector;
        return new InformationColumnComponent(this.component.locator(compSel));
    }

    customerServiceColumnComponent(): CustomerServiceColumnComponent {
        const compSel = CustomerServiceColumnComponent.selector;
        return new CustomerServiceColumnComponent(this.component.locator(compSel));
    }
}
import { Locator } from "@playwright/test";
import { FooterColumnComponent } from "./FooterColumnComponent";

export class InformationColumnComponent extends FooterColumnComponent {

    public static selector: string = '.colum.information';

    constructor(component: Locator) {
        super(component);
    }

}
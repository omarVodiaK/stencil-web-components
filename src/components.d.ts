/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ModalSize } from "./components/modal/modal";
export namespace Components {
    interface SebCheckbox {
        "_id"?: string;
        "checked": boolean;
        "description"?: string | HTMLElement;
        "disabled"?: boolean;
        "error"?: string | HTMLElement;
        "label": HTMLElement;
        "name"?: string;
    }
    interface SebModal {
        "backdropDismiss"?: boolean;
        "centered"?: boolean;
        "size"?: ModalSize;
        "toggle"?: boolean;
    }
    interface WebDatepicker {
        /**
          * Element class
         */
        "class"?: string;
        /**
          * Property sets whether datepicker is disabled
         */
        "disabled"?: boolean;
        /**
          * Property sets whether SEB styled datepicker will be rendered despite the browser used
         */
        "forceCustom"?: boolean;
        "localeCode": string;
        /**
          * Maximum range of date that can be selected
         */
        "max"?: Date;
        /**
          * Minimum range of date that can be selected
         */
        "min"?: Date;
        /**
          * Property sets whether a datepicker is a month picker
         */
        "monthPicker"?: boolean;
        /**
          * Element placeholder
         */
        "placeholder": string;
        "value": Date | null;
    }
}
declare global {
    interface HTMLSebCheckboxElement extends Components.SebCheckbox, HTMLStencilElement {
    }
    var HTMLSebCheckboxElement: {
        prototype: HTMLSebCheckboxElement;
        new (): HTMLSebCheckboxElement;
    };
    interface HTMLSebModalElement extends Components.SebModal, HTMLStencilElement {
    }
    var HTMLSebModalElement: {
        prototype: HTMLSebModalElement;
        new (): HTMLSebModalElement;
    };
    interface HTMLWebDatepickerElement extends Components.WebDatepicker, HTMLStencilElement {
    }
    var HTMLWebDatepickerElement: {
        prototype: HTMLWebDatepickerElement;
        new (): HTMLWebDatepickerElement;
    };
    interface HTMLElementTagNameMap {
        "seb-checkbox": HTMLSebCheckboxElement;
        "seb-modal": HTMLSebModalElement;
        "web-datepicker": HTMLWebDatepickerElement;
    }
}
declare namespace LocalJSX {
    interface SebCheckbox {
        "_id"?: string;
        "checked"?: boolean;
        "description"?: string | HTMLElement;
        "disabled"?: boolean;
        "error"?: string | HTMLElement;
        "label"?: HTMLElement;
        "name"?: string;
    }
    interface SebModal {
        "backdropDismiss"?: boolean;
        "centered"?: boolean;
        "onDimiss"?: (event: CustomEvent<any>) => void;
        "size"?: ModalSize;
        "toggle"?: boolean;
    }
    interface WebDatepicker {
        /**
          * Element class
         */
        "class"?: string;
        /**
          * Property sets whether datepicker is disabled
         */
        "disabled"?: boolean;
        /**
          * Property sets whether SEB styled datepicker will be rendered despite the browser used
         */
        "forceCustom"?: boolean;
        "localeCode"?: string;
        /**
          * Maximum range of date that can be selected
         */
        "max"?: Date;
        /**
          * Minimum range of date that can be selected
         */
        "min"?: Date;
        /**
          * Property sets whether a datepicker is a month picker
         */
        "monthPicker"?: boolean;
        "onValueChange"?: (event: CustomEvent<any>) => void;
        /**
          * Element placeholder
         */
        "placeholder"?: string;
        "value"?: Date | null;
    }
    interface IntrinsicElements {
        "seb-checkbox": SebCheckbox;
        "seb-modal": SebModal;
        "web-datepicker": WebDatepicker;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "seb-checkbox": LocalJSX.SebCheckbox & JSXBase.HTMLAttributes<HTMLSebCheckboxElement>;
            "seb-modal": LocalJSX.SebModal & JSXBase.HTMLAttributes<HTMLSebModalElement>;
            "web-datepicker": LocalJSX.WebDatepicker & JSXBase.HTMLAttributes<HTMLWebDatepickerElement>;
        }
    }
}

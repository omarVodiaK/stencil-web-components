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
        "disabled"?: boolean;
        "label": string;
        "name"?: string;
    }
    interface SebModal {
        "backdropDismiss"?: boolean;
        "centered"?: boolean;
        "size"?: ModalSize;
        "toggle"?: boolean;
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
    interface HTMLElementTagNameMap {
        "seb-checkbox": HTMLSebCheckboxElement;
        "seb-modal": HTMLSebModalElement;
    }
}
declare namespace LocalJSX {
    interface SebCheckbox {
        "_id"?: string;
        "checked"?: boolean;
        "disabled"?: boolean;
        "label"?: string;
        "name"?: string;
    }
    interface SebModal {
        "backdropDismiss"?: boolean;
        "centered"?: boolean;
        "onDimiss"?: (event: CustomEvent<any>) => void;
        "size"?: ModalSize;
        "toggle"?: boolean;
    }
    interface IntrinsicElements {
        "seb-checkbox": SebCheckbox;
        "seb-modal": SebModal;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "seb-checkbox": LocalJSX.SebCheckbox & JSXBase.HTMLAttributes<HTMLSebCheckboxElement>;
            "seb-modal": LocalJSX.SebModal & JSXBase.HTMLAttributes<HTMLSebModalElement>;
        }
    }
}

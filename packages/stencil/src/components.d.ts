/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface StencilCounter {
        "count": number;
    }
}
declare global {
    interface HTMLStencilCounterElement extends Components.StencilCounter, HTMLStencilElement {
    }
    var HTMLStencilCounterElement: {
        prototype: HTMLStencilCounterElement;
        new (): HTMLStencilCounterElement;
    };
    interface HTMLElementTagNameMap {
        "stencil-counter": HTMLStencilCounterElement;
    }
}
declare namespace LocalJSX {
    interface StencilCounter {
        "count"?: number;
    }
    interface IntrinsicElements {
        "stencil-counter": StencilCounter;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "stencil-counter": LocalJSX.StencilCounter & JSXBase.HTMLAttributes<HTMLStencilCounterElement>;
        }
    }
}
import { Component } from '../component';
import { Store } from '../store';
declare const _default: {
    createContext: (ctx: any) => {
        Provider: (props: any) => any;
        Consumer: (props: any) => {
            component: any;
            props: any;
        };
        get: () => any;
        set: (ctx: any) => any;
    };
    h: (tagNameOrComponent: any, props: any, ...children: any) => any;
    jsx: (statics: TemplateStringsArray, ...rest: any[]) => any;
    render: (component: any, parent?: HTMLElement | null, removeChildNodes?: boolean) => any;
    tick: typeof setTimeout | (<TResult1 = any, TResult2 = never>(onfulfilled?: ((value: any) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>);
    task: (task: () => void) => number;
    Component: typeof Component;
    Fragment: (props: any) => any;
    Store: typeof Store;
};
export default _default;
export { printVersion } from '../helpers';
export { VERSION } from '../version';
//# sourceMappingURL=bundle.slim.d.ts.map
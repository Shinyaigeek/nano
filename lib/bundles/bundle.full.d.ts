import { Component } from '../component';
import { Store } from '../store';
import { Helmet } from '../components/helmet';
import { Link } from '../components/link';
import { Img } from '../components/img';
import { Visible } from '../components/visible';
import * as UI from '../ui/index';
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
    hydrate: (component: any, parent?: HTMLElement | null, removeChildNodes?: boolean) => any;
    hydrateLazy: (component: any, parent?: HTMLElement | null, removeChildNodes?: boolean) => any;
    jsx: (statics: TemplateStringsArray, ...rest: any[]) => any;
    nodeToString: (node: any) => string;
    removeAllChildNodes: (parent: HTMLElement) => void;
    render: (component: any, parent?: HTMLElement | null, removeChildNodes?: boolean) => any;
    tick: typeof setTimeout | (<TResult1 = any, TResult2 = never>(onfulfilled?: ((value: any) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>);
    task: (task: () => void) => number;
    Component: typeof Component;
    Fragment: (props: any) => any;
    Helmet: typeof Helmet;
    Img: typeof Img;
    Link: typeof Link;
    Store: typeof Store;
    Visible: typeof Visible;
    UI: typeof UI;
};
export default _default;
export { printVersion } from '../helpers';
export { VERSION } from '../version';
//# sourceMappingURL=bundle.full.d.ts.map
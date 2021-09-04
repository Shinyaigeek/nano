export interface FC<P = {}> {
    (props: P): any;
}
/** Creates a new Microtask using Promise() */
export declare const tick: typeof setTimeout | (<TResult1 = any, TResult2 = never>(onfulfilled?: ((value: any) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>);
export declare const removeAllChildNodes: (parent: HTMLElement) => void;
export declare const strToHash: (s: string) => string;
export declare const appendChildren: (element: any, children: any) => void;
export declare const hydrate: (component: any, parent?: HTMLElement | null, removeChildNodes?: boolean) => any;
/** Returns the populated parent if available else  one child or an array of children */
export declare const render: (component: any, parent?: HTMLElement | null, removeChildNodes?: boolean) => any;
export declare const _render: (comp: any) => any;
/** @deprecated renderComponent() is deprecated, use _render() instead! */
export declare const renderComponent: (_component: any) => any;
export declare const h: (tagNameOrComponent: any, props: any, ...children: any) => any;
//# sourceMappingURL=core.d.ts.map
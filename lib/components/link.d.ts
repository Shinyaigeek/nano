import { Component } from '../component';
interface Props {
    [key: string]: any;
    prefetch?: boolean | 'hover' | 'visible';
    href: string;
    back?: boolean;
    delay?: number;
}
/**
 * A simple Link component
 * Add <Link prefetch ..., to prefetch the html document
 * Add <Link prefetch="hover" ..., to prefetch the html document on hovering over the link element.
 */
export declare class Link extends Component<Props> {
    prefetchOnHover(): void;
    prefetchOnVisible(): void;
    addPrefetch(): void;
    didMount(): void;
    render(): any;
}
export {};
//# sourceMappingURL=link.d.ts.map
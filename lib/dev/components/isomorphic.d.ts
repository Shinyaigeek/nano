import { Component } from '../../component';
declare class App extends Component {
    static getData(): Promise<string[]>;
    didMount(): Promise<void>;
    render(data: string[]): any;
}
export { App };
//# sourceMappingURL=isomorphic.d.ts.map
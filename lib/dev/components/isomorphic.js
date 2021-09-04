"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const Nano = __importStar(require("../../core"));
const component_1 = require("../../component");
/**
 * This Component work on the client and the server.
 * (Make your you prefetch the static getData() and pass it as "data" props in SSR)
 */
// simply mocks a server fetch and returns an array of comments
const fetchMock = () => new Promise(resolve => setTimeout(() => resolve(['comment_one', 'comment_two']), 500));
const Comments = ({ comments }) => {
    console.log(comments);
    return (Nano.h("ul", null, comments.map(d => (Nano.h("li", null, d)))));
};
// const Bla = () => {
//   console.log('BLA')
//   return <div>asdf</div>
// }
// the app component
class App extends component_1.Component {
    // this static method can be calles before the componend is rendered in SSR mode
    static getData() {
        return __awaiter(this, void 0, void 0, function* () {
            // get some data from your server
            return yield fetchMock();
        });
    }
    didMount() {
        return __awaiter(this, void 0, void 0, function* () {
            // will re-render the component and pass the result of getData()
            const data = yield App.getData();
            this.update(data);
        });
    }
    render(data) {
        // this.props.data will be defined if in SSR mode
        data = data || this.props.data;
        // console.log(Nano.h(Bla, null))
        if (data)
            return Nano.h(Comments, { comments: data });
        // <Comments comments={data} />
        // this will be shown while loading on the client side
        else
            return Nano.h("div", null, "loading...");
    }
}
exports.App = App;
//# sourceMappingURL=isomorphic.js.map
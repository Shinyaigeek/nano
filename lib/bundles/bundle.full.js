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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSION = exports.printVersion = void 0;
// core
const core_1 = require("../core");
const lazy_1 = require("../lazy");
const helpers_1 = require("../helpers");
// useful tools
const component_1 = require("../component");
const fragment_1 = require("../fragment");
const store_1 = require("../store");
const context_1 = require("../context");
// built-in components
const helmet_1 = require("../components/helmet");
const link_1 = require("../components/link");
const img_1 = require("../components/img");
const visible_1 = require("../components/visible");
// tagged templates
const jsx_1 = require("../jsx");
// ui
const UI = __importStar(require("../ui/index"));
exports.default = {
    createContext: context_1.createContext,
    h: core_1.h,
    hydrate: core_1.hydrate,
    hydrateLazy: lazy_1.hydrateLazy,
    jsx: jsx_1.jsx,
    nodeToString: helpers_1.nodeToString,
    removeAllChildNodes: core_1.removeAllChildNodes,
    render: core_1.render,
    tick: core_1.tick,
    task: helpers_1.task,
    Component: component_1.Component,
    Fragment: fragment_1.Fragment,
    Helmet: helmet_1.Helmet,
    Img: img_1.Img,
    Link: link_1.Link,
    Store: store_1.Store,
    Visible: visible_1.Visible,
    UI
};
// version
var helpers_2 = require("../helpers");
Object.defineProperty(exports, "printVersion", { enumerable: true, get: function () { return helpers_2.printVersion; } });
var version_1 = require("../version");
Object.defineProperty(exports, "VERSION", { enumerable: true, get: function () { return version_1.VERSION; } });
//# sourceMappingURL=bundle.full.js.map
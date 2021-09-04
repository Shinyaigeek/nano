"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSION = exports.printVersion = void 0;
// core
const core_1 = require("../core");
const helpers_1 = require("../helpers");
// useful tools
const component_1 = require("../component");
const fragment_1 = require("../fragment");
const store_1 = require("../store");
const context_1 = require("../context");
// tagged templates
const jsx_1 = require("../jsx");
exports.default = {
    createContext: context_1.createContext,
    h: core_1.h,
    jsx: jsx_1.jsx,
    render: core_1.render,
    tick: core_1.tick,
    task: helpers_1.task,
    Component: component_1.Component,
    Fragment: fragment_1.Fragment,
    Store: store_1.Store
};
// version
var helpers_2 = require("../helpers");
Object.defineProperty(exports, "printVersion", { enumerable: true, get: function () { return helpers_2.printVersion; } });
var version_1 = require("../version");
Object.defineProperty(exports, "VERSION", { enumerable: true, get: function () { return version_1.VERSION; } });
//# sourceMappingURL=bundle.slim.js.map
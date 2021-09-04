"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsxDev = exports.jsxs = exports.jsx = exports.Fragment = void 0;
var fragment_1 = require("../fragment");
Object.defineProperty(exports, "Fragment", { enumerable: true, get: function () { return fragment_1.Fragment; } });
const core_1 = require("../core");
const createNode = function (type, props) {
    var _a;
    return (0, core_1.h)(type, props, (_a = props === null || props === void 0 ? void 0 : props.children) !== null && _a !== void 0 ? _a : []);
};
exports.jsx = createNode;
exports.jsxs = createNode;
exports.jsxDev = createNode;
//# sourceMappingURL=index.js.map
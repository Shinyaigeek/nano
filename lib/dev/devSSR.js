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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Nano = __importStar(require("../core"));
const ssr_1 = require("../ssr");
const component_1 = require("../component");
const helmet_1 = require("../components/helmet");
// @ts-ignore
const fs_1 = __importDefault(require("fs"));
// @ts-ignore
const path_1 = require("path");
// @ts-ignore
const http_1 = __importDefault(require("http"));
class App extends component_1.Component {
    render() {
        return Nano.h("div", null, "Nano JSX App");
    }
}
const app = (0, ssr_1.renderSSR)(Nano.h(App, null));
const { body, head, footer } = helmet_1.Helmet.SSR(app);
let html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body { 
        font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }
     </style>
    ${head.join('\n')}
  </head>
  <body>
    <div id="root">
      ${body}
    </div>
  </body>
  ${footer.join('\n')}
</html>
`;
// minify
// html = html.replace(/[\s]+/gm, ' ')
http_1.default
    .createServer((req, res) => {
    const { url } = req;
    if (/\.html$/.test(url))
        return res.end(html);
    // @ts-ignore
    const path = (0, path_1.join)(__dirname, '../../', url);
    fs_1.default.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404);
            return res.end(data);
        }
        const type = /\.png$/.test(url) ? 'image/png' : 'image/svg+xml';
        res.setHeader('Content-Type', type);
        return res.end(data);
    });
})
    .listen(8080, () => console.log('open http://localhost:8080/index.html in your browser'));
//# sourceMappingURL=devSSR.js.map
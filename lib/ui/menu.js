"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const core_1 = require("../core");
const _config_1 = require("./_config");
const _helpers_1 = require("./_helpers");
class Menu {
    constructor() {
        this.defaultParentId = 'menu_items_container';
        this.cssHash = Math.random().toString(36).substr(2, 9);
    }
    didUnmount() {
        const el = document.querySelector(`[data-css-hash*="${this.cssHash}"]`);
        if (el)
            el.remove();
    }
    getParentElement(id) {
        // delete all other
        const others = document.querySelectorAll(`[id^="${this.defaultParentId}"]`);
        others.forEach(e => {
            e.remove();
        });
        let el = document.getElementById(`${this.defaultParentId}-${id}`);
        if (!el) {
            el = document.createElement('div');
            el.id = `${this.defaultParentId}-${id}`;
        }
        (0, core_1.removeAllChildNodes)(el);
        document.body.appendChild(el);
        return el;
    }
    close() {
        (0, core_1.removeAllChildNodes)(this.getParentElement(this.cssHash));
    }
    open(menuOptions) {
        const { position, list } = menuOptions;
        // check in which corner the menu appears and adjust fixed position.
        const left = position.x < window.innerWidth / 2 ? 'left' : 'right';
        const top = position.y < window.innerHeight / 2 ? 'top' : 'bottom';
        const styles = `
   
    #menu_items_background-${this.cssHash} {
      width: 100vw;
      height: 100vh;
      background: transparent;
      position: fixed;
      top: 0;
      left: 0;
      z-index: ${_config_1.zIndex.menu}      
    }
   
    #menu_items_list-${this.cssHash} {
      position: fixed;
      background: white;
      
      border-radius: 4px;
      min-width: 112px;

      ${top}: ${position.y > window.innerHeight / 2 ? window.innerHeight - position.y : position.y}px;
      ${left}: ${position.x > window.innerWidth / 2 ? window.innerWidth - position.x : position.x}px;

      z-index: ${_config_1.zIndex.menu}

      ${_config_1.boxShadow}
    }

    `;
        // remove old styles
        const el = document.querySelector(`[data-css-hash*="${this.cssHash}"]`);
        if (el)
            el.remove();
        // add new styles
        (0, _helpers_1.addStylesToHead)(styles, this.cssHash);
        const itemsList = (0, core_1.h)('div', { id: `menu_items_list-${this.cssHash}` }, list);
        const itemsBg = (0, core_1.h)('div', { onClick: () => this.close(), id: `menu_items_background-${this.cssHash}` }, itemsList);
        itemsList.addEventListener('click', (e) => e.stopPropagation());
        this.getParentElement(this.cssHash).appendChild((0, core_1.render)(itemsBg));
    }
}
exports.Menu = Menu;
//# sourceMappingURL=menu.js.map
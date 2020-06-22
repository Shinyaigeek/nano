export class Nano {
  static Fragment = (props: any) => {
    return props.children
  }

  static removeAllChildNodes = (parent: HTMLElement) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }

  static render(component: any, parent: HTMLElement | null = null, removeAllChildNodes = true) {
    let el = Nano.renderComponent(component)
    if (!!parent) {
      if (removeAllChildNodes) Nano.removeAllChildNodes(parent)
      parent.appendChild(el)
    }
    return el
  }

  static renderComponent(componentP: { component: any; props?: any }): any {
    let el
    let props = { children: [] }
    let component

    // @ts-ignore // if it is already a jsx element, simply return it
    if (componentP.tagName) {
      return componentP
    }

    if (componentP?.component) component = componentP.component
    if (componentP?.props) props = componentP.props
    // @ts-ignore
    else props = componentP?.prototype?.props || {}

    try {
      const c = new component()

      c.willMount?.()

      c.element = c.render()
      el = c.element

      if (!el.tagName) {
        el = Nano.renderComponent(el)
      }

      if (c.didMount) setTimeout(() => c.didMount(), 0)
    } catch (error) {
      if (typeof component === 'function') el = component(props)
      else el = component

      // for the fragment
      if (Array.isArray(el)) return el

      if (el && !el.tagName) {
        el = Nano.renderComponent(el)
      }
    }

    if (typeof el === 'undefined') throw new Error()
    return el
  }

  // https://stackoverflow.com/a/42405694/12656855
  static createElement(tagNameOrComponent: any, props: any = {}, ...children: any) {
    // if tagNameOrComponent is a component
    if (typeof tagNameOrComponent !== 'string') {
      const p = { ...props, children: children }
      return { component: tagNameOrComponent, props: p }
    }

    const element = document.createElement(tagNameOrComponent) as HTMLElement
    let ref

    // simply add more if needed in the future
    const events = ['onInput', 'onClick', 'onChange', 'onSubmit']

    for (const p in props) {
      if (p === 'ref') ref = props[p]
      else if (events.find((e) => e === p)) element.addEventListener(p.toLowerCase().substring(2), (e) => props[p](e))
      else if (/className/i.test(p)) console.warn('You can use "class" instead of "className".')
      else element.setAttribute(p, props[p])
    }

    // child is text
    if (children.length === 1 && typeof children[0] === 'string') {
      element.innerHTML = children[0]
      if (ref) ref(element)
      return element
    }

    const appendChild = (child: any) => {
      element.appendChild(child.nodeType == null ? document.createTextNode(child.toString()) : child)
    }

    for (let i = 2; i < arguments.length; i++) {
      if (Array.isArray(arguments[i])) {
        arguments[i].forEach((child: any) => {
          if (child.component) child = Nano.renderComponent({ ...child })
          appendChild(child)
        })
      } else {
        let child = Nano.renderComponent({ component: arguments[i] })
        if (Array.isArray(child)) {
          child.forEach((c) => {
            appendChild(c)
          })
        } else appendChild(child)
      }
    }

    if (ref) ref(element)
    return element
  }
}
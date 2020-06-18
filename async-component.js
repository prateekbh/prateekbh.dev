/* eslint-disable */

import { h, render, hydrate } from "preact"

const PENDING = {}

function Provider(props) {
  this.getChildContext = () => props.context
  return props.children
}

const r = document.querySelector('[type="__PREACT_CLI_DATA__"]')
if (r) {
  Object.defineProperty(r, "innerHTML", {
    value: decodeURI(r.innerHTML),
  })
}

export default function async(load) {
  let component

  function AsyncComponent(props) {
    if (component) return h(component, props)

    if (!this._initialized) {
      this._initialized = true
      console.log("loading component")
      load((mod) => {
        console.log("loaded component", mod)
        component = (mod && mod.default) || mod

        console.log("first child: ", this.base && this.base.firstChild)
        this._rendered = true
        const vnode = h(
          Provider,
          { context: this.context },
          h(component, this.props)
        )
        if (!this._skipHydrate && this.base && this.base.firstChild) {
          hydrate(vnode, {
            childNodes: [this.base],
            insertBefore(c, r) {
              this.base.parentNode.insertBefore(c, r)
            },
            removeChild(c) {
              this.base.parentNode.removeChild(c)
            },
          })
        } else {
          render(vnode, this.__P, this.base)
        }
      })
      this.shouldComponentUpdate = (props) => {
        if (this._rendered) {
          render(h(component, props), this.__P, this.base)
        }
        return false
      }
    }

    const me = (this.__P || this._parentDom).lastChild
    if (!me) this._skipHydrate = true
    return (
      me &&
      h(me.localName, {
        dangerouslySetInnerHTML: PENDING,
      })
    )
  }
  AsyncComponent.preload = load
  return AsyncComponent
}

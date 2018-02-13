'use strict'
import {
  assert
} from './assert'
import {
  isNode
} from './is'

const KEY_ROOT = '__flexio__'

class AttributeHandler {
  constructor(element, scope) {
    assert(
      isNode(element),
      'flexio-nodes-reconciliation:AttributeHandler:constructor: `element` argument assert be a NodeElement, `%s` given',
      typeof element)
    this.element = element
    this.scope = scope
    if (!this._hasRootAttribute()) {
      this._initRootAttribute()
    }
    this.privateAttribute = this.element[KEY_ROOT]
  }

  static select(element, scope) {
    return new AttributeHandler(element, scope)
  }

  _initRootAttribute() {
    this.element[KEY_ROOT] = {}
  }

  _hasRootAttribute() {
    return KEY_ROOT in this.element
  }

  setAttribute(key, value) {
    this.privateAttribute[key] = value
  }
}
export {
  AttributeHandler
}

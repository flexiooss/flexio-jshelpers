'use strict'
import { assert } from '../assert'
import { deepFreezeSeal } from '../objectHelpers'
import { isIterable, isPrimitive } from '../is'

export class Enum {
  constructor(items) {
    assert(isIterable(items),
      'Enum:' + this.constructor + ':  `items` argument should be iterable')
    items.forEach((item) => {
      assert(isPrimitive(item),
        'Enum:' + this.constructor + ': `item` should be primitive')
      Object.defineProperty(this, item, {
        value: item,
        writable: false,
        configurable: false,
        enumerable: true
      })
    })
    return deepFreezeSeal(this)
  }
}

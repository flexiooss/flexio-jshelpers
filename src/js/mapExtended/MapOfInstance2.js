// import {
//   MapExtended
// } from './MapExtended'
import { assert } from '../assert'

export class MapOfInstance2 extends Map {
  constructor(values, Class) {
    super(values)
    this._class = Class
    this.forEach((v, k, m) => {
      this._constraint(v)
    })
  }

  set(key, value) {
    this._constraint(value)

  }

  _initValue(key) {
    return false
  }

  _constraint(value) {
    assert(value instanceof this._classType,
      'hotballoon:MapOfInstance:add require an argument instance of ̀ %s`, `%s` given',
      this._classType.constructor.name,
      value.constructor.name
    )
    return value
  }
}


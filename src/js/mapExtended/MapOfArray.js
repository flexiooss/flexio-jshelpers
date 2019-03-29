import {
  MapExtended
} from './MapExtended'
import {
  assert
} from '../assert'

class MapOfArray extends MapExtended {
  _initValue(key) {
    this._collection.set(key, [])
  }

  _constraint(value) {
    assert(Array.isArray(value),
      'hotballoon:MapOfArray:_constraint: `value` argument assert be an instance of Array')
    return value
  }

  _addValue(key, value, keyValue) {
    let col = this._collection.get(key)
    col.push(value)
    return col
  }
}
export {
  MapOfArray
}

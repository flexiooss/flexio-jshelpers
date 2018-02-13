import {
  MapExtended
} from './MapExtended'
import {
  assert
} from '../assert'
import {
  isObject
} from '../is'

class MapOfObject extends MapExtended {
  _initValue(key) {
    this._collection.set(key, {})
  }
  _addValue(key, value, keyValue) {
    assert(!!keyValue,
      'hotballoon:MapOfObject:_addValue: `keyValue` argunment assert not be empty'
    )
    let ret = this._collection.get(key)
    ret[keyValue] = value
    return ret
  }
  _constraint(value) {
    assert(isObject(value),
      'hotballoon:MapOfObject:_constraint: `value` argument assert be an instance of Object')
    return value
  }
}
export {
  MapOfObject
}

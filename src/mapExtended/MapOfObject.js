import {
  MapExtended
} from './MapExtended'
import {
  should
} from '../should'
import {
  isObject
} from '../is'

class MapOfObject extends MapExtended {
  _initValue(key) {
    this._collection.set(key, {})
  }
  _addValue(key, value, keyValue) {
    should(!!keyValue,
      'hotballoon:MapOfObject:_addValue: `keyValue` argunment should not be empty'
    )
    let ret = this._collection.get(key)
    ret[keyValue] = value
    return ret
  }
  _constraint(value) {
    should(isObject(value),
      'hotballoon:MapOfObject:_constraint: `value` argument should be an instance of Object')
    return value
  }
}
export {
  MapOfObject
}
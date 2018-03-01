import {
  MapExtended
} from './MapExtended'
import {
  assert
} from '../assert'

class MapOfInstance extends MapExtended {
  constructor(classType) {
    super()
    this._classType = classType || null
  }

  _initValue(key) {
    return false
  }

  _constraint(value) {
    if (this._classType) {
      assert(value instanceof this._classType,
        'hotballoon:MapOfInstance:add require an argument instance of ̀ %s`, `%s` given',
        this._classType.constructor.name,
        value.constructor.name
      )
    }
    return value
  }
}
export {
  MapOfInstance
}

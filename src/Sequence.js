import {
  isNumber
} from './is'
import {
  should
} from './should'

class Sequence {
  constructor(prefix) {
    this._prefix = prefix || ''
    var lastID = 0
    Object.defineProperty(this, '_lastID', {
      enumerable: false,
      configurable: false,
      get: () => lastID,
      set: (newID) => {
        should(isNumber(newID),
          'flexio-jshelpers:Sequence:set: _lastID property should be a Number')
        lastID = newID
      }
    })
  }

  getNewId() {
    this._lastID++
    return (this._prefix) ? this._prefix + this._lastID : this._lastID
  }
}

export {
  Sequence
}
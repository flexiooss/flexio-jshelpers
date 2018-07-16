'use strict'
import {isNumber} from './is'
import {assert} from './assert'

const STEP = 1

class Sequence {
  constructor(prefix = '') {
    this._prefix = prefix
    var lastID = 0

    Object.defineProperty(this, '_lastID', {
      enumerable: false,
      configurable: false,
      get: () => lastID,
      set: (newID) => {
        assert(isNumber(newID),
          'flexio-jshelpers:Sequence:set: _lastID property assert be a Number')
        lastID = newID
      }
    })
  }

  /**
   * @return {string} id
   */
  nextID() {
    this._lastID = this._lastID + STEP
    return this._prefix + this._lastID
  }
}

export { Sequence }

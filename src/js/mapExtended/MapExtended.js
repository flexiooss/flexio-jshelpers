import {
  assert
} from '../assert'

class MapExtended {
  constructor() {
    this._collection = new Map()
  }

  init(key) {
    this._initValue(key)
  }

  setCollection(collection) {
    assert(collection instanceof Map,
      'hotballoon:ExtendMap:set: `collection` argument assert be an instance of Map')
    this._collection = collection
  }

  set(key, value) {
    assert(key !== undefined,
      'hotballoon:ObjectMap:add: `key` argument assert not be undefined')
    this._collection.set(key, this._constraint(value))
  }

  add(key, value, keyValue) {
    assert(key !== undefined,
      'hotballoon:ObjectMap:add: `key` argument assert not be undefined')
    if (!this._collection.has(key)) {
      this._initValue(key)
    }
    let ret = this._constraint(this._addValue(key, value, keyValue))
    this._collection.set(key, ret)
    return ret
  }

  has(key) {
    return this._collection.has(key)
  }

  keys() {
    return this._collection.keys()
  }

  values() {
    return this._collection.values()
  }

  get(key) {
    return (key) ? this._collection.get(key) : this._collection
  }

  delete(key) {
    this._collection.delete(key)
  }

  forEach(callback) {
    return this._collection.forEach(callback)
  }

  clear() {
    this._collection.clear()
  }

  size() {
    return this._collection.size
  }

  _constraint(value) {
    return value
  }

  _initValue(key) {
    this._collection.set(key, null)
  }

  _addValue(key, value, keyValue) {
    return value
  }
}

export {
  MapExtended
}

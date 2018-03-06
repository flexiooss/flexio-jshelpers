import {
  isObject,
  isUndefined
} from './is'

export const sortObject = (object, callback) => {
  var arrayTemp = []
  var objectTemp = []
  for (let prop in object) {
    if (object.hasOwnProperty(prop)) {
      arrayTemp.push({
        'key': prop,
        'value': object[prop]
      })
    }
  }
  arrayTemp.sort(function(a, b) {
    return callback(a, b)
  })
  let countOfArray = arrayTemp.length
  for (let i = 0; i < countOfArray; i++) {
    objectTemp[arrayTemp[i]['key']] = arrayTemp[i]['value']
  }
  return objectTemp
}

export const filterObject = (object, callback) => {
  Object.keys(object).forEach((key) => {
    const value = object[key]
    if (!callback(value, key, object)) {
      delete object[key]
    }
  })
  return object
}

export const deepFreeze = (object) => {
  let propNames = Object.getOwnPropertyNames(object)
  propNames.forEach(function(name) {
    var prop = object[name]
    if (typeof prop === 'object' && prop !== null && !Object.isFrozen(prop)) {
      deepFreeze(prop)
    }
  })
  return Object.freeze(object)
}
export const deepSeal = (object) => {
  let propNames = Object.getOwnPropertyNames(object)
  propNames.forEach(function(name) {
    var prop = object[name]
    if (typeof prop === 'object' && prop !== null && !Object.isSealed(prop)) {
      deepSeal(prop)
    }
  })
  return Object.seal(object)
}
export const deepFreezeSeal = (object) => {
  let propNames = Object.getOwnPropertyNames(object)
  propNames.forEach(function(name) {
    var prop = object[name]
    if (typeof prop === 'object' && prop !== null && !Object.isSealed(prop) && !Object.isFrozen(prop)) {
      deepFreezeSeal(prop)
    }
  })
  return Object.freeze(Object.seal(object))
}

/**
 * split a keys and deep check if key exists in an Object
 * @param {*} object
 * @param {string} keys
 * @param {string} separator
 * @returns false || value of Object[key]
 */
export const deepKeyResolver = (object, keys, separator = '.') => {
  var arrayKeys = keys.split(separator)
  var ret = object
  do {
    var key = arrayKeys.shift()
    if (key in object) {
      ret = object[key]
    } else {
      return false
    }
  } while (arrayKeys.length)
  return ret
}

export const intersectObjectByKey = (object) => {
  return Object.keys(object)
    .filter(key => this.storesName.includes(key))
    .reduce((obj, key) => {
      obj[key] = object[key]
      return obj
    }, {})
}

export const maxKey = (object) => {
  var max
  for (let key in object) {
    max = (key > max) ? key : max
  }
  return max
}

/**
 *
 * @param {Object} object
 * @param {Array:String} properties
 * @returns {boolean}
 */
export const hasProperties = (object, properties) => {
  for (let prop of properties) {
    if (!object.hasOwnProperty(prop)) {
      return false
    }
  }
  return true
}

export const cloneWithJsonMethod = (object, parseDate = false) => {
  if (parseDate) {
    const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/
    return JSON.parse(JSON.stringify(object), (key, value) => {
      if (dateFormat.test(value)) {
        return new Date(value)
      }

      return value
    })
  } else {
    return JSON.parse(JSON.stringify(object))
  }
}

export const mergeWithoutPrototype = (target, ...sources) => {
  return Object.assign(target, ...sources)
}

export const deepMerge = (target, source) => {
  for (let k in source) {
    const sourceValue = source[k]
    const targetValue = target[k]

    if (isObject(sourceValue)) {
      target[k] = (!isUndefined(targetValue)) ? deepMerge(isObject(targetValue) ? targetValue : {}, cloneWithJsonMethod(sourceValue)) : cloneWithJsonMethod(sourceValue)
    } else if (Array.isArray(sourceValue)) {
      target[k] = (Array.isArray(targetValue)) ? [...new Set(targetValue.concat(cloneWithJsonMethod(sourceValue)))] : cloneWithJsonMethod(sourceValue)
    } else {
      target[k] = sourceValue
    }
  }

  return target
}

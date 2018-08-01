import {
  isObject,
  isUndefined
} from './is'

/**
 *
 * @param {Object} object
 * @param {function} callback
 * @return {Object}
 * @function
 * @export
 */
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
  arrayTemp.sort((a, b) => {
    return callback(a, b)
  })
  let countOfArray = arrayTemp.length
  for (let i = 0; i < countOfArray; i++) {
    objectTemp[arrayTemp[i]['key']] = arrayTemp[i]['value']
  }
  return objectTemp
}
/**
 *
 * @param {Object} object
 * @param {filterObjectCallback} callback
 * @return {Object}
 * @function
 * @export
 */
export const filterObject = (object, callback) => {
  Object.keys(object).forEach((key) => {
    const value = object[key]
    if (!callback(value, key, object)) {
      delete object[key]
    }
  })
  return object
}
/**
 * @callback filterObjectCallback
 * @param {*} value
 * @param {string} key
 * @param {Object} object
 * @return {boolean}
 */

/**
 *
 * @param object
 * @return {ReadonlyArray<any>}
 */
export const deepFreeze = (object) => {
  let propNames = Object.getOwnPropertyNames(object)
  propNames.forEach((name) => {
    var prop = object[name]
    if (typeof prop === 'object' && prop !== null && !Object.isFrozen(prop)) {
      deepFreeze(prop)
    }
  })
  return Object.freeze(object)
}
export const deepSeal = (object) => {
  let propNames = Object.getOwnPropertyNames(object)
  propNames.forEach((name) => {
    var prop = object[name]
    if (typeof prop === 'object' && prop !== null && !Object.isSealed(prop)) {
      deepSeal(prop)
    }
  })
  return Object.seal(object)
}
/**
 *
 * @param {object} object
 * @return {ReadonlyObject<any>}
 * @function
 * @export
 */
export const deepFreezeSeal = (object) => {
  let propNames = Object.getOwnPropertyNames(object)
  propNames.forEach((name) => {
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

/**
 *
 * @param {object} object
 * @return {*}
 * @function
 * @export
 */
export const maxKey = (object) => {
  var max
  for (const key in object) {
    max = (key > max) ? key : max
  }
  return max
}

/**
 *
 * @param {Object} object
 * @param {Array<String>} properties
 * @returns {boolean}
 * @function
 * @export
 */
export const hasProperties = (object, properties) => {
  for (const prop of properties) {
    if (!object.hasOwnProperty(prop)) {
      return false
    }
  }
  return true
}

// function deepCopy(obj) {
//   if (typeof obj === 'object') {
//     return Object.keys(obj)
//       .map(k => ({ [k]: deepCopy(obj[k]) }))
//       .reduce((a, c) => Object.assign(a, c), {})
//   } else if (Array.isArray(obj)) {
//     return obj.map(deepCopy)
//   }
//   return obj
// }

// function deepCopy2(obj) {
//   if (typeof obj === 'object') {
//     return Object.getOwnPropertyNames(obj)
//       .map(k => ({ [k]: deepCopy(obj[k]) }))
//       .reduce((a, c) => Object.assign(a, c), {})
//   } else if (Array.isArray(obj)) {
//     return obj.map(deepCopy)
//   }
//   return obj
// }

// function clone2(obj) {
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }
//   if (obj instanceof Date) {
//     return new Date(obj.getTime());
//   }
//   if (Array.isArray(obj)) {
//     var clonedArr = [];
//     obj.forEach(function (element) {
//       clonedArr.push(clone2(element))
//     })
//     return clonedArr
//   }

//   let clonedObj = new obj.constructor()
//   for (var prop in obj) {
//     if (obj.hasOwnProperty(prop)) {
//       clonedObj[prop] = clone2(obj[prop])
//     }
//   }
//   return clonedObj
// }
// function recursive(obj) {
//   var clone, i;

//   if (typeof obj !== 'object' || !obj)
//     return obj;

//   if ('[object Array]' === Object.prototype.toString.apply(obj)) {
//     clone = [];
//     var len = obj.length;
//     for (i = 0; i < len; i++)
//       clone[i] = recursive(obj[i]);
//     return clone;
//   }

//   clone = {};
//   for (i in obj)
//     if (obj.hasOwnProperty(i))
//       clone[i] = recursive(obj[i]);
//   return clone;
// }

export const cloneObject = (object, parseDate = false) => cloneWithJsonMethod(object, parseDate)

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

/**
 *
 * @param {Object} target
 * @param {...Object} sources
 * @return {Object}
 * @function
 * @export
 */
export const mergeWithoutPrototype = (target, ...sources) => {
  return Object.assign(target, ...sources)
}

/**
 *
 * @param {object} target
 * @param {object} source
 * @return {object} target
 * @function
 * @export
 */
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

/**
 *
 * @param {Object} input
 * @param {array<string>} keys
 * @param {any} [defaultReturn=null]
 * @return {*}
 */
export const valueByKeys = (input, keys, defaultReturn = null) => {
  if (keys.length && typeof input !== 'undefined') {
    const v = input[keys.shift()]
    return (typeof v !== 'undefined') ? valueByKeys(v, keys, defaultReturn) : defaultReturn
  }
  return input
}

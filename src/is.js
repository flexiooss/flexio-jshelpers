/**
 *
 * @param {any} a
 * @return {boolean}
 * @function
 * @export
 */
export const isUndefined = a => typeof a === 'undefined'
/**
 *
 * @param {any} a
 * @return {boolean}
 * @function
 * @export
 */
export const isNull = a => typeof a !== 'undefined' && a === null
/**
 *
 * @param {any} a
 * @return {boolean}
 * @function
 * @export
 */
export const isString = a => typeof a === 'string'
/**
 *
 * @param {any} a
 * @return {boolean}
 * @function
 * @export
 */
export const isBoolean = a => typeof a === 'boolean'
/**
 *
 * @param {any} a
 * @return {boolean}
 * @function
 * @export
 */
export const isNumber = a => typeof a === 'number'
/**
 *
 * @param {any} a
 * @return {boolean}
 * @function
 */
export const isObject = a => a && typeof a === 'object' && !Array.isArray(a)
/**
 *
 * @param {any} a
 * @return {boolean}
 * @function
 * @export
 */
export const isFunction = a => typeof a === 'function'
/**
 *
 * @param {any} a
 * @return {boolean}
 * @function
 * @export
 */
export const isNode = a => isObject(a) && isNumber(a.nodeType)
/**
 *
 * @param {any} a
 * @return {boolean}
 * @function
 * @export
 */
export const isNodeText = a => isObject(a) && (a.nodeType === 3)
/**
 *
 * @param {any} a
 * @return {boolean}
 * @function
 * @export
 */
export const isPrimitive = a => {
  switch (typeof a) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'symbol':
    case 'undefined': return true
    default: return a === null
  }
}
/**
 *
 * @param {any} a
 * @return {boolean}
 * @function
 * @export
 */
export const isIterable = a => (a == null) ? false : typeof a[Symbol.iterator] === 'function'
/**
 *
 * @param {any} a
 * @return {boolean}
 * @function
 * @export
 */
export const isArray = a => Array.isArray(a)

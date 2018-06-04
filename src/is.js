export const isUndefined = a => typeof a === 'undefined'
export const isString = a => typeof a === 'string'
export const isBoolean = a => typeof a === 'boolean'
export const isNumber = a => typeof a === 'number'
export const isObject = a => a && typeof a === 'object' && !Array.isArray(a)
export const isFunction = a => typeof a === 'function'
export const isNode = a => isObject(a) && isNumber(a.nodeType)
export const isNodeText = a => isObject(a) && (a.nodeType === 3)
export const isPrimitive = (val) => {
  switch (typeof val) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'symbol':
    case 'undefined': return true
    default: return val === null
  }
}

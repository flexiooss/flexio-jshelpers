/**
 *
 * @param {*} a
 * @return {string}
 * @function
 */
export const toString = (a) => {
  if (typeof a === 'symbol') {
    a = a.toString()
    return a.slice(7, a.length - 1)
  }
  return a.toString()
}

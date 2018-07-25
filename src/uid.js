/**
 * Generate an unique token
 * @param {string} [prefix='']
 * @return {string}
 * @function
 */
export const UID = (prefix = '') => {
  return prefix + Math.abs(((Math.random() * new Date()) | 0))
}

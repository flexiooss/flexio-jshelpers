export const UID = (prefix = '') => {
  return prefix + Math.abs(((Math.random() * new Date()) | 0))
}

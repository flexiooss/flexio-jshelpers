/* global window */
export const FLEXIO_IMPORT_OBJECT = Symbol('FLEXIO_IMPORT_OBJECT')
if (!window) {
  var window = {}
}
if (!window.FLEXIO_IMPORT_OBJECT) {
  window.FLEXIO_IMPORT_OBJECT = {}
}

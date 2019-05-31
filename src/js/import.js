/* global window,self,global */
export const FLEXIO_IMPORT_OBJECT = Symbol.for('FLEXIO_IMPORT_OBJECT')

const getGlobal = function() {
  if (typeof self !== 'undefined') {
    return self
  }
  if (typeof window !== 'undefined') {
    return window
  }
  if (typeof global !== 'undefined') {
    return global
  }
  throw new Error('unable to locate global object')
}

export const globalScope = getGlobal()

if (!globalScope[FLEXIO_IMPORT_OBJECT]) {
  globalScope[FLEXIO_IMPORT_OBJECT] = {}
}
export const globalFlexioImport = globalScope[FLEXIO_IMPORT_OBJECT]

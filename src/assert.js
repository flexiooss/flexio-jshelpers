'use strict'
class AssertionError extends Error {
  constructor(...params) {
    super(...params)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AssertionError)
    }
    this.name = 'AssertionError'
    this.date = new Date()
  }
}

export const assert = function(assert, message, ...messageArgs) {
  if (typeof __ASSERT__ !== 'undefined') {
    if (message === undefined) {
      throw new Error('`assert` function require an error message argument')
    }
    if (!((typeof assert === 'function') ? assert() : assert)) {
      var ArgIndex = 0
      throw new AssertionError(
        message.replace(/%s/g, () =>
          messageArgs[ArgIndex++]
        )
      )
    }
  }
}

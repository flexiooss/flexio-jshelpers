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

/**
 * Throw an Error if assertion not equal to true, NODE_ENV = test | development
 * @param {boolean} assert
 * @param {string} message %s will be replaced by messageArgs
 * @param {...string} messageArgs
 * @function
 * @throws AssertionError
 */
export const assert = (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development') ? (assert, message, ...messageArgs) => {
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
} : () => {}

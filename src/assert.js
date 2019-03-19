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
 * @param {(boolean|Function)} assertion
 * @param {string} message %s will be replaced by messageArgs
 * @param {...string} messageArgs
 * @function
 * @throws AssertionError
 */
export const assert = (assertion, message, ...messageArgs) => {
  if (message === undefined) {
    throw new Error('`assert` function require an error message argument')
  }
  if (!((typeof assertion === 'function') ? assertion() : assertion)) {
    var ArgIndex = 0
    throw new AssertionError(
      message.replace(/%s/g, () =>
        messageArgs[ArgIndex++]
      )
    )
  }
}
/**
 * @param {(boolean|Function)} assertion
 * @param {string} message %s will be replaced by messageArgs
 * @param {...string} messageArgs
 * @function
 * @throws TypeError
 */
export const assertType = (assertion, message, ...messageArgs) => {
  if (message === undefined) {
    throw new Error('`assert` function require an error message argument')
  }
  if (!((typeof assertion === 'function') ? assertion() : assertion)) {
    var ArgIndex = 0
    throw new TypeError(
      message.replace(/%s/g, () =>
        messageArgs[ArgIndex++]
      )
    )
  }
}

'use strict'
export const assert = function(condition, format, ...formatArgs) {
  if (typeof __ASSERT__ !== 'undefined') {
    if (format === undefined) {
      throw new Error('`assert` function require an error format argument')
    }
    condition = (typeof condition === 'function') ? condition() : condition
    if (!condition) {
      var ArgIndex = 0
      const error = new Error(
        format.replace(/%s/g, () =>
          formatArgs[ArgIndex++]
        )
      )
      throw error
    }
  }
}

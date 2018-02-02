export const should = function(condition, format, ...formatArgs) {
  if (format === undefined) {
    throw new Error('`should` function require an error format argument')
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

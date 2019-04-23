/**
 *
 * @param {String} word
 * @returns {String}
 */
export const firstUppercase = (word) => {
  let res = word.toLowerCase()
  return res[0].toUpperCase() + res.slice(1)
}

/**
 *
 * @param {String} word
 * @param {String} sep
 * @param {Boolean} firstUpper
 * @returns {String}
 */
export const camelCase = (word, sep = '_', firstUpper = true) => {
  let words = word.split(sep)
  let res = ''
  let i = 0
  let countOfWords = words.length
  if (!firstUpper) {
    res += words[0].toLowerCase()
    i = 1
  }
  for (i; i < countOfWords; i++) {
    res += firstUppercase(words[i])
  }
  return res
}

/**
 *
 * @param {RegExp} regexp
 * @param {String} str
 * @returns {Array}
 */
export const matchAll2Array = (regexp, str) => {
  // let array = [...str.matchAll(regexp)]; // Node not compatible
  let matches = []
  str.replace(regexp, function () {
    let arr = ([]).slice.call(arguments, 0)
    let extras = arr.splice(-2)
    arr.index = extras[0]
    arr.input = extras[1]
    matches.push(arr)
  })
  return matches.length ? matches : null
}
/**
 *
 *
 * @param {string} input
 * @param  {number } expectedLength
 * @param {string} replaceWith
 * @returns {string}
 */
export const padLeft = (input, expectedLength, replaceWith) => {
  return Array(expectedLength - String(input).length + 1).join(replaceWith || '0') + input;
}

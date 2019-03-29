import {assertType} from '../assert'
import {isArray, isNull, isNumber, isString} from '../is'
import {deepFreezeSeal} from '../objectHelpers'

/**
 * @implements {ResponseDelegate}
 */
class FetchResponseDelegate {
  /**
   *
   * @param {?number} [code=null]
   * @param {?string} [body=null]
   * @param {Array<string>} [headers=[]]
   * @readonly
   */
  constructor(code = null, body = null, headers = []) {
    assertType(isNull(code) || isNumber(code), 'FetchResponseDelegate: `code` should be a number')
    assertType(isNull(body) || isString(body), 'FetchResponseDelegate: `body` should be a string')
    assertType(isArray(headers), 'FetchResponseDelegate: `headers` should be an array')
    /**
     *
     * @type {?number}
     * @private
     */
    this.__code = code
    /**
     *
     * @type {?string}
     * @private
     */
    this.__body = body
    /**
     *
     * @type {Array<string>}
     * @private
     */
    this.__headers = headers

    return deepFreezeSeal(this)
  }

  /**
   * @return {?number}
   */
  code() {
    return this.__code
  }

  /**
   * @return {?string}
   */
  body() {
    return this.__body
  }

  /**
   *
   * @param {string} name
   * @return {?string}
   */
  header(name) {
    if (name in this.__headers) {
      return this.__headers[name]
    }
    return null
  }

  /**
   *
   * @return {?string}
   */
  contentType() {
    return this.header('content-type')
  }
}

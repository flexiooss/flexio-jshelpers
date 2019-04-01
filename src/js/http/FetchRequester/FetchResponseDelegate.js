/*
global Headers
*/
import {assertType} from '../../assert'
import {isNull, isNumber, isString} from '../../is'
import {deepFreezeSeal} from '../../objectHelpers'

/**
 * @implements {ResponseDelegate}
 */
export class FetchResponseDelegate {
  /**
   *
   * @param {?number} [code=null]
   * @param {?string} [body=null]
   * @param {?Headers} [headers=null]
   * @readonly
   */
  constructor(code = null, body = null, headers = null) {
    assertType(isNull(code) || isNumber(code), 'FetchResponseDelegate: `code` should be a number')
    assertType(isNull(body) || isString(body), 'FetchResponseDelegate: `body` should be a string')
    assertType(isNull(headers) || headers instanceof Headers, 'FetchResponseDelegate: `headers` should be a Headers')
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
     * @type {Headers}
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
    return this.__headers.get(name)
  }

  /**
   *
   * @return {?string}
   */
  contentType() {
    return this.header('content-type')
  }
}

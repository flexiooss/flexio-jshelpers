/*
global Headers
*/
import {assertType} from '../assert'
import {isArray, isNull, isNumber, isString} from '../is'
import {deepFreezeSeal} from '../objectHelpers'
import {StringArray} from '../types/StringArray'

/**
 * @implements {ResponseDelegate}
 */
export class FetchResponseDelegate {
  /**
   *
   * @param {?number} [code=null]
   * @param {?string} [body=null]
   * @param {Headers} headers
   * @readonly
   */
  constructor(code = null, body = null, headers = []) {
    assertType(isNull(code) || isNumber(code), 'FetchResponseDelegate: `code` should be a number')
    assertType(isNull(body) || isString(body), 'FetchResponseDelegate: `body` should be a string')
    assertType(headers instanceof Headers, 'FetchResponseDelegate: `headers` should be a Headers')
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

/* global fetch, Headers */

import {assertType} from '../../assert'
import {isNull, isString} from '../../is'

export class InitRequestBuilder {
  constructor() {
    /**
     *
     * @type {?string}
     * @private
     */
    this.__body = null
    /**
     *
     * @type {?string}
     * @private
     */
    this.__cache = null
    /**
     *
     * @type {?Headers}
     * @private
     */
    this.__headers = null
    /**
     *
     * @type {?string}
     * @private
     */
    this.__method = null
    /**
     *
     * @type {?string}
     * @private
     */
    this.__mode = null
  }

  /**
   *
   * @param {string} value
   * @return {InitRequestBuilder}
   */
  body(value) {
    assertType(isString(value) || isNull(value), 'InitRequestBuilder:body value should be a string')
    this.__body = value
    return this
  }

  /**
   *
   * @param {string} value
   * @return {InitRequestBuilder}
   */
  cache(value) {
    assertType(isString(value), 'InitRequestBuilder:cache value should be a string')
    assertType(['default',
      'no-store', 'reload', 'no-cache', 'force-cache', 'only-if-cached'].includes(value), 'InitRequestBuilder:cache value should be in [\'default\',\'no-store\', \'reload\', \'no-cache\', \'force-cache\', \'only-if-cached\']')
    this.__cache = value
    return this
  }

  /**
   *
   * @param {Headers} headers
   * @return {InitRequestBuilder}
   */
  headers(headers) {
    assertType(headers instanceof Headers, 'InitRequestBuilder:headers value should be a Headers')
    this.__headers = headers
    return this
  }

  /**
   *
   * @param {string} value
   * @return {InitRequestBuilder}
   */
  method(value) {
    assertType(isString(value), 'InitRequestBuilder:method value should be a string')
    assertType(['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'HEAD'].includes(value), 'InitRequestBuilder:method value should be in [\'GET\', \'POST\', \'PATCH\', \'PUT\', \'DELETE\', \'HEAD\']')
    this.__method = value
    return this
  }

  /**
   *
   * @param {string} value
   * @return {InitRequestBuilder}
   */
  mode(value) {
    assertType(isString(value), 'InitRequestBuilder:method value should be a string')
    assertType(['cors', 'no-cors', 'same-origin'].includes(value), 'InitRequestBuilder:method value should be in [\'cors\', \'no-cors\', \'same-origin\']')
    this.__mode = value
    return this
  }

  /**
   * @return {Object}
   */
  build() {
    const init = {}
    if (!isNull(this.__body)) {
      init.body = this.__body
    }
    if (!isNull(this.__cache)) {
      init.cache = this.__cache
    }
    if (!isNull(this.__headers)) {
      init.headers = this.__headers
    }
    if (!isNull(this.__method)) {
      init.method = this.__method
    } else {
      throw new Error('InitRequestBuilder:build `method` should not be empty')
    }
    if (!isNull(this.__mode)) {
      init.mode = this.__mode
    }
    return init
  }
}

/* global fetch, Headers,Request,URL,Response */
import {InitRequestBuilder} from './InitRequestBuilder'
import {assertType} from '../../assert'
import {isString, isNull} from '../../is'
import {StringArray} from '../../types/StringArray'
import {FetchResponseDelegate} from './FetchResponseDelegate'

/**
 * @implements {HttpRequester}
 */
export class FetchRequester {
  constructor() {
    /**
     *
     * @type {Headers}
     * @private
     */
    this.__headers = new Headers()
    /**
     *
     * @type {?URL}
     * @private
     */
    this.__path = null
    /**
     *
     * @type {URLSearchParams}
     * @private
     */
    this.__parameters = new URLSearchParams()
  }

  /**
   * @return {ResponseDelegate}
   */
  get() {
    return this.__exec(
      this.__buildRequest(
        this.__buildInit('GET')
      )
    )
  }

  /**
   * @param {?string} [contentType=null]
   * @param {?string} [body=null]
   * @return {ResponseDelegate}
   */
  post(contentType = null, body = null) {
    if (!isNull(contentType)) {
      this.header('content-type', contentType)
    }
    return this.__exec(
      this.__buildRequest(
        this.__buildInit('POST').body(body)
      )
    )
  }

  /**
   * @param {?string} contentType
   * @param {?string} body
   * @return {ResponseDelegate}
   */
  put(contentType = null, body = null) {
    if (!isNull(contentType)) {
      this.header('content-type', contentType)
    }
    return this.__exec(
      this.__buildRequest(
        this.__buildInit('PUT').body(body)
      )
    )
  }

  /**
   * @param {?string} contentType
   * @param {?string} body
   * @return {ResponseDelegate}
   */
  patch(contentType = null, body = null) {
    if (!isNull(contentType)) {
      this.header('content-type', contentType)
    }
    return this.__exec(
      this.__buildRequest(
        this.__buildInit('PATCH').body(body)
      )
    )
  }

  /**
   * @return {ResponseDelegate}
   */
  delete() {
    return this.__exec(
      this.__buildRequest(
        this.__buildInit('DELETE')
      )
    )
  }

  /**
   * @return {ResponseDelegate}
   */
  head() {
    return this.__exec(
      this.__buildRequest(
        this.__buildInit('HEAD')
      )
    )
  }

  /**
   * @param {string} name
   * @param {?string} value
   * @return {this}
   */
  parameter(name, value) {
    assertType(isString(name) && (isString(value) || isNull(value)), 'FetchRequester:parameter: name and value should be string or null')
    this.__parameters.set(name, value)
    return this
  }

  /**
   * @param {string} name
   * @param {Array<string>} values
   * @return {this}
   */
  arrayParameter(name, values) {
    assertType(isString(name), 'FetchRequester:arrayParameter: name should be string or null')
    this.__parameters.delete(name)
    for (const v in new StringArray(...values)) {
      this.__parameters.append(name, v)
    }
    return this
  }

  /**
   * @param {string} name
   * @param {?string} value
   * @return {this}
   */
  header(name, value) {
    assertType(isString(name) && (isString(value) || isNull(value)), 'FetchRequester:header: name and value should be string or null')
    this.__headers.set(name, value)
    return this
  }

  /**
   * @param {string} name
   * @param {(Array<string>|StringArray)} values
   * @return {this}
   */
  arrayHeader(name, values) {
    assertType(isString(name), 'FetchRequester:arrayHeader: name should be string or null')
    this.__headers.set(name, new StringArray(...values))
    return this
  }

  /**
   * @param {?string} path
   * @return {this}
   */
  path(path) {
    assertType(isString(path) || isNull(path), 'FetchRequester:path: path should be string or null')
    this.__path = new URL(path)
    return this
  }

  /**
   *@param {Request} request
   * @return {FetchResponseDelegate}
   * @private
   */
  async __exec(request) {
    const response = await fetch(request)
    const body = await response.text()
    return this.__buildResponse(response, body)
  }

  /**
   * @param {InitRequestBuilder} init
   * @return {Request}
   * @private
   */
  __buildRequest(init) {
    if (this.__parameters.toString().length) {
      return new Request(new URL(this.__path.href + '?' + this.__parameters.toString()), init.build())
    } else {
      return new Request(this.__path, init.build())
    }
  }

  /**
   *
   * @param {string} method
   * @return {InitRequestBuilder}
   * @private
   */
  __buildInit(method) {
    return new InitRequestBuilder()
      .method(method)
      .cache('no-cache')
      .mode('cors')
      .headers(this.__headers)
  }

  /**
   *
   * @param {Response} response
   * @param {?string} body
   * @return {FetchResponseDelegate}
   * @private
   */
  __buildResponse(response, body) {
    assertType(response instanceof Response, 'FetchRequester:__buildResponse `response` should be a Response')
    return new FetchResponseDelegate(response.status, body, response.headers)
  }
}

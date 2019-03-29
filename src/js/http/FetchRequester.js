/* global fetch, Headers */
/**
 * @implements {HttpRequester}
 */
import {assertType} from '../assert'
import {isString, isNull} from '../is'
import {StringArray} from '../types/StringArray'
import {FetchResponseDelegate} from 'FetchResponseDelegate'

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
     * @type {?string}
     * @private
     */
    this.__path = null
    /**
     *
     * @type {Map<string, (?string|?StringArray)>}
     * @private
     */
    this.__parameters = new Map()
  }

  /**
   * @return {ResponseDelegate}
   */
  get() {
  }

  /**
   * @param {?string} [contentType=null]
   * @param {?string} [body=null]
   * @return {ResponseDelegate}
   */
  post(contentType = null, body = null) {
  }

  /**
   * @param {?string} contentType
   * @param {?string} body
   * @return {ResponseDelegate}
   */
  put(contentType = null, body = null) {
  }

  /**
   * @param {?string} contentType
   * @param {?string} body
   * @return {ResponseDelegate}
   */
  patch(contentType = null, body = null) {
  }

  /**
   * @return {ResponseDelegate}
   */
  delete() {
  }

  /**
   * @return {ResponseDelegate}
   */
  head() {
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
    this.__parameters.set(name, new StringArray(...values))
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
    this.__path = path
    return this
  }

  async __exec() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.dir(response)
    const json = await response.text()
    console.log(json)
    return new FetchResponseDelegate()

  }

}

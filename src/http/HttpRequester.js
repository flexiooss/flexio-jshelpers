/**
 * @interface
 */
class HttpRequester {
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
   * @param {string} value
   * @return {HttpRequester}
   */
  parameter(name, value) {
  }

  /**
   * @param {string} name
   * @param {Array<string>} values
   * @return {HttpRequester}
   */
  arrayParameter(name, values) {
  }

  /**
   * @param {string} name
   * @param {string} value
   * @return {HttpRequester}
   */
  header(name, value) {
  }

  /**
   * @param {string} name
   * @param {Array<string>} values
   * @return {HttpRequester}
   */
  arrayHeader(name, values) {
  }

  /**
   * @param {string} path
   * @return {HttpRequester}
   */
  path(path) {
  }
}

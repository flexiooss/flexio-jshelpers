/**
 * @interface
 */
class ResponseDelegate {
  /**
   * @return {number}
   */
  code() {
  }

  /**
   * @return {string}
   */
  body() {
  }

  /**
   *
   * @param {string} name
   * @return {Array<string>}
   */
  header(name) {
  }

  /**
   * @return {string}
   */
  contentType() {
  }
}

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
  payload() {
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

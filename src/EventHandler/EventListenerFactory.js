import {EventListenerParam} from './EventListenerParam'

export class EventListenerFactory {
  /**
   *
   * @param {String} event
   */
  constructor(event = '') {
    /**
     *
     * @type {string}
     * @protected
     */
    this._event = event
    /**
     *
     * @type {Function}
     * @callback
     * @protected
     */
    this._callback = () => true
  }

  /**
   *
   * @param {String} event
   * @return {EventListenerFactory}
   * @constructor
   */
  static listen(event) {
    return new this(event)
  }

  /**
   *
   * @param {Function} clb
   * @return {EventListenerFactory}
   */
  callback(clb) {
    this._callback = clb
    return this
  }

  /**
   *
   * @return {EventListenerParam}
   */
  build() {
    return EventListenerParam.create(
      this._event,
      this._callback
    )
  }
}

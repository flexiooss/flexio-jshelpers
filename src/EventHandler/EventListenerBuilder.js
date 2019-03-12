import {EventListenerParam} from './EventListenerParam'

export class EventListenerBuilder {
  /**
   *
   * @param {String|Symbol} event
   */
  constructor(event = '') {
    /**
     *
     * @type {String|Symbol}
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
   * @param {String|Symbol} event
   * @return {EventListenerBuilder}
   * @constructor
   */
  static listen(event) {
    return new this(event)
  }

  /**
   *
   * @param {Function} clb
   * @return {EventListenerBuilder}
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

import {EventListenerParam} from './EventListenerParam'
import {SymbolStringArray} from '../types/SymbolStringArray'

export class EventListenerBuilder {
  /**
   *
   * @param {SymbolStringArray} events
   */
  constructor(events) {
    /**
     *
     * @type {SymbolStringArray}
     * @protected
     */
    this._events = events
    /**
     *
     * @type {EventHandlerBase~eventClb}
     * @protected
     */
    this._callback = () => true
  }

  /**
   *
   * @param {...(String|Symbol)} events
   * @return {EventListenerBuilder}
   * @constructor
   */
  static listen(...events) {
    return new this(new SymbolStringArray(...events))
  }

  /**
   *
   * @param {EventHandlerBase~eventClb} clb
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
      this._events,
      this._callback
    )
  }
}

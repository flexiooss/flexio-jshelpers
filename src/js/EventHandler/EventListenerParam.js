import {isFunction} from '../is'
import {assert} from '../assert'
import {deepFreezeSeal} from '../objectHelpers'
import {SymbolStringArray} from '../types/SymbolStringArray'

export class EventListenerParam {
  /**
   *
   * @param {SymbolStringArray} events
   * @param {EventHandlerBase~eventClb} callback
   */
  constructor(events, callback) {
    assert(events instanceof SymbolStringArray,
      'EventListenerParam:constructor: ̀`events` property assert be not empty'
    )
    assert(isFunction(callback),
      'EventListenerParam:constructor: ̀`callback` property assert be Callable'
    )
    /**
     *
     * @type {SymbolStringArray}
     */
    this.events = events
    /**
     *
     * @type {EventHandlerBase~eventClb}
     */
    this.callback = callback
  }

  /**
   *
   * @param {SymbolStringArray} events
   * @param {EventHandlerBase~eventClb} callback
   * @constructor
   * @readonly {EventListenerParam}
   */
  static create(events, callback) {
    return deepFreezeSeal(new this(events, callback))
  }
}

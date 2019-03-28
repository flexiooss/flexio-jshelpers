import {isFunction} from '../is'
import {assert} from '../assert'
import {deepFreezeSeal} from '../objectHelpers'

export class EventListenerParam {
  /**
   *
   * @param {String} event
   * @param {function(payload<Object>, type<string>)} callback
   */
  constructor(event, callback) {
    assert(!!event,
      'EventListenerParam:constructor: ̀`event` property assert be not empty'
    )
    assert(isFunction(callback),
      'EventListenerParam:constructor: ̀`callback` property assert be Callable'
    )
    /**
     *
     * @params {String}
     */
    this.event = event
    /**
     *
     * @params {function(payload<Object>, type<string>)}
     */
    this.callback = callback
  }

  /**
   *
   * @param {String} event
   * @param {function(payload<Object>, type<string>)} callback
   * @constructor
   * @readonly {EventListenerParam}
   */
  static create(event, callback) {
    return deepFreezeSeal(new this(event, callback))
  }
}

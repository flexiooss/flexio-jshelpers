'use strict'
import {isBoolean} from '../is'
import {assert} from '../assert'
import {UID} from '../uid'
import {Sequence} from '../Sequence'
import {EventListenerParam} from './EventListenerParam'

const _isDispatching_ = Symbol('_isDispatching_')
const _sequenceId_ = Symbol('_sequenceId_')

/**
 * @class
 * @abstract
 */
export class EventHandlerBase {
  constructor() {
    /**
     *
     * @type {Map<String|Symbol, Map<String|Symbol, CallableFunction >>}
     * @protected
     */
    this._listeners = new Map()

    this._pendingPayload = new Map()
    /**
     *
     * @type {Set<string|Symbol>}
     * @protected
     */
    this._isHandled = new Set()
    /**
     *
     * @type {Set<String|Symbol>}
     * @protected
     */
    this._isPending = new Set()
    this[_sequenceId_] = new Sequence(UID())

    /**
     * @property {boolean}
     * @name EventHandlerBase#Symbol(_isDispatching_)
     * @private
     */
    let _isDispatching = false
    Object.defineProperty(this,
      _isDispatching_,
      {
        enumerable: false,
        configurable: false,
        get: () => _isDispatching,
        set: (v) => {
          assert(isBoolean(v),
            '_isDispatching argument should be a Boolean'
          )
          _isDispatching = v
        }
      })
  }

  /**
   *
   * @param {String|Symbol} event
   * @param {Object} payload
   */
  dispatch(event, payload) {
    if (this._listeners.has(event)) {
      this._beforeDispatch(event, payload)
      try {
        this._listeners.get(event).forEach((v, k) => {
          if (!this._isPending.has(k)) {
            this._invokeCallback(event, k)
          }
        })
      } finally {
        this._stopDispatching(event)
      }
    }
  }

  /**
   *
   * @param {string|Symbol} event
   * @protected
   */
  _ensureHaveListenersMap(event) {
    if (!(this._listeners.has(event))) {
      this._listeners.set(event, new Map())
    }
  }

  /**
   *
   * @protected
   * @param {String|Symbol} event of Listener
   * @param {String|Symbol} token of Listener
   */
  _invokeCallback(event, token) {
    this._isPending.add(token)
    try {
      this._listeners.get(event)
        .get(token)
        .callback(this._pendingPayload.get(event), event)
    } finally {
      this._isHandled.add(token)
    }
  }

  /**
   *
   * @return {string}
   */
  nextID() {
    return this[_sequenceId_].nextID()
  }

  /**
   *
   * @param {EventListenerParam} eventListenerParam
   * @returns {String} token
   */
  addEventListener(eventListenerParam) {
    assert(eventListenerParam instanceof EventListenerParam,
      'EventHandlerBase:addEventListener: ̀`eventListenerParam` argument assert be an instance of EventListenerParam'
    )

    this._ensureHaveListenersMap(eventListenerParam.event)
    const id = this.nextID()

    this._listeners.get(eventListenerParam.event)
      .set(id, {
        callback: eventListenerParam.callback
      })

    return id
  }

  /**
   *
   * @param {String|Symbol} event of Listener
   * @param {String} token
   * @throws AssertionError
   */
  removeEventListener(event, token) {
    if (this._listeners.has(event)) {
      assert(this._listeners.get(event).has(token),
        'EventHandlerBase:removeEventListener: ̀`id` argument not in _listeners : `%s`',
        event
      )
      this._listeners.get(event).delete(token)
    }
  }

  /**
   *
   * @param {String|Symbol} event of Listener
   * @param {String} token
   * @returns {boolean}
   */
  hasEventListener(event, token) {
    return (this._listeners.has(event)) && (this._listeners.get(event).has(token))
  }

  /**
   *
   * @param {String|Symbol} event of Listener
   * @param {Object} payload
   * @private
   */
  _beforeDispatch(event, payload) {
    this._listeners.get(event).forEach((v, k) => {
      this._isHandled.delete(k)
    })
    this._pendingPayload.set(event, payload)
    this[_isDispatching_] = true
  }

  /**
   *
   * @param {string|Symbol} event
   * @protected
   */
  _stopDispatching(event) {
    this._listeners.get(event).forEach((v, k) => {
      this._isPending.delete(k)
    })
    this._pendingPayload.delete(event)
    this[_isDispatching_] = false
  }

  /**
   *
   * @return {boolean}
   */
  isDispatching() {
    return this[_isDispatching_]
  }
}

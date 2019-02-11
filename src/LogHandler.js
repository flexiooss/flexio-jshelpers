'use strict'
import {isBoolean} from './is'
import {assert} from './assert'

const COLORS = {
  black: '#261E1A',
  blueDark: '#133046',
  blue: '#15959F',
  sand: '#F1E4B3',
  sandDark: '#EC9770',
  redDark: '#CC1714',
  red: '#FF4420',
  redLight: '#C7402D',
  greenDark: '#00261C',
  green: '#167F39',
  greenLight: '#45BF55',
  magentaDark: '#660F27',
  magenta: '#B30838',
  pink: '#FF8C94',
  yellow: '#DED120',
  orange: '#F46E03',
  orangeLight: '#FC902D'
}

class LogHandler {
  constructor(prefix = '', color = 'black') {
    this._prefix = prefix
    /**
     *
     * @type {boolean}
     * @private
     */
    this._debug = typeof window.__DEBUG__ !== 'undefined'
    /**
     *
     * @type {string}
     * @private
     */
    this._color = COLORS[color] || '#000'
    /**
     *
     * @type {Set<any>}
     * @private
     */
    this._logs = new Set()
    this._color = color
  }

  /**
   *
   * @param {string} value
   */
  set color(value) {
    this._color = COLORS[value] || '#000'
  }

  /**
   *
   * @param {boolean} value
   */
  debugable(value = true) {
    assert(isBoolean(value),
      'hotballoon:LogHandler:construct: `_debug` argument assert be Boolean')
    this._debug = value
  }

  /**
   *
   * @param {string} text
   * @return {LogHandler}
   */
  log(text) {
    let log = new LogText(this._prefix + ' : ' + text).color(this._color)
    this._logs.add(log)
    return log
  }

  /**
   *
   * @param {Node} node
   * @return {LogNode}
   */
  node(node) {
    let log = new LogNode(node).color(this._color)
    this._logs.add(log)
    return log
  }

  object(object) {
    let log = new LogObject(object).color(this._color)
    this._logs.add(log)
    return log
  }

  /**
   * Print log into console
   */
  print() {
    if (this._debug) {
      if (this._logs.size > 1) {
        var i = 0
        var collapsed = false
        this._logs.forEach((v) => {
          if (v instanceof LogText && i === 0) {
            console.groupCollapsed(v.content, v.styles())
            collapsed = true
          }
          if (v instanceof LogText && i !== 0) {
            console.log(v.content, v.styles())
          }
          if (v instanceof LogNode) {
            console.log(v.content, v.styles())
          }
          if (v instanceof LogObject) {
            console.dir(v.content, v.styles())
          }
          i++
        })

        if (collapsed) {
          console.groupEnd()
        }
      } else {
        this._logs.forEach((v) => {
          if (v instanceof LogText) {
            console.log(v.content, v.styles())
          }
          if (v instanceof LogNode) {
            console.log(v.content, v.styles())
          }
          if (v instanceof LogObject) {
            console.dir(v.content, v.styles())
          }
        })
      }
    }
    this._logs.clear()
  }
}

export {LogHandler}

const FONT_SIZE = 12

class Log {
  constructor() {
    this._content = null
    this._color = ''
    this._background = false
    this._size = 1
  }

  /**
   *
   * @return {?*}
   */
  get content() {
    return this._content
  }

  /**
   *
   * @return {string}
   */
  styles() {
    let styles = (this._background) ? 'background-color: ' + this._color + '; color: #fff;' : 'color: ' + this._color + ';'
    styles += 'font-size: ' + ((this._size * 1.5) + FONT_SIZE) + 'px;'
    return styles
  }

  background(value = true) {
    this._background = value
    return this
  }

  /**
   *
   * @param {string} value
   */
  color(value) {
    this._color = value
    return this
  }

  /**
   *
   * @param {number} value
   */
  size(value = 1) {
    this._size = value
    return this
  }
}

class LogText extends Log {
  /**
   *
   * @param {string} text
   */
  constructor(text) {
    super()
    this._content = '%c ' + text
  }
}

class LogObject extends Log {
  /**
   *
   * @param {Object} object
   */
  constructor(object) {
    super()
    this._content = object
  }
}

class LogNode extends Log {
  /**
   *
   * @param {Node} node
   */
  constructor(node) {
    super()
    this._content = node
  }
}

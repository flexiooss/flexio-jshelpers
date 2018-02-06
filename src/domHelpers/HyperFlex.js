import {
  isString,
  isNumber,
  isNode,
  isObject
} from '../is'
import {
  should
} from '../should'

class HyperFlex {
  constructor(querySelector, ...args) {
    return this._createElement(querySelector, ...args)
  }

  static html(querySelector, ...args) {
    return new HyperFlex(querySelector, ...args)
  }

  /**
     * Shortcut for document.createElement
     * @param {String} querySelector : tag#myId.class1.class2
     * @param {Object | String | Number | NodeElement} Attributes & styles |text | childNodes
     *    - {Object} Attributes & styles { attribute: value,  ...,  style:{ rule: value, ... }}
     *    - {String | Number} Text for append TextNode
     *    - {NodeElement} NodeElement for append
     * @returns {NodeElement}
     */
  _createElement(querySelector, ...args) {
    const {
      tag,
      id,
      classList
    } = this._parseQuerySelector(querySelector)
    const element = document.createElement(tag)
    if (id) {
      element.id = id
    }
    if (classList.length) {
      element.classList.add(...classList)
    }

    this._parseArguments(element, ...args)
    return element
  }

  /**
     *
     * @param {String} querySelector : tag#myId.class1.class2...
     * @returns {Object} { tag, id, classList }
     *
     */
  _parseQuerySelector(querySelector) {
    should(isString(querySelector),
      'flexio-jshelpers:parseQuerySelector: `querySelector` argument should be a String `%s` given',
      typeof querySelector
    )
    var re = '^([\\w]*)([#\\w\\d-_]*)?([.\\w\\d-_]*)?$'
    const matches = new RegExp(re, 'gi').exec(querySelector)
    const tag = matches[1]
    should(!!tag,
      'flexio-jshelpers:parseQuerySelector: `tag` argument should not be empty'
    )
    const id = (matches[2]) ? matches[2].substr(1) : ''
    const classList = (matches[3]) ? matches[3].substr(1).split('.') : []
    return {
      tag,
      id,
      classList
    }
  }

  /**
     *
     * @param {NodeElement} element
     * @param {...var} arguments
     * @returns {NodeElement} element
     */
  _parseArguments(element, ...args) {
    should(isNode(element),
      'flexio-jshelpers:parseArguments: `element` argument should be a NodeElement `%s` given',
      typeof element
    )
    let countOfArgs = args.length
    for (let i = 0; i < countOfArgs; i++) {
      const arg = args[i]
      if (isNode(arg)) {
        element.appendChild(arg)
      } else if (isString(arg) || isNumber(arg)) {
        element.appendChild(document.createTextNode(arg))
      } else if (isObject(arg)) {
        this._setAttributes(element, arg)
      }
    }
    return element
  }

  /**
     *
     * @param {NodeElement} element
     * @param {Object} styles
     * @returns {void}
     */

  _setStyles(element, styles) {
    should(isNode(element),
      'flexio-jshelpers:setStyles: `element` argument should be a NodeElement `%s` given',
      typeof element
    )
    should(isObject(styles),
      'flexio-jshelpers:setStyles: `styles` argument should be an Object `%s` given',
      typeof styles
    )

    for (let key in styles) {
      element.style[key] = styles[key]
    }
  }

  /**
     *
     * @param {NodeElement} element
     * @param {Object} attributes
     * @returns {void}
     */
  _setAttributes(element, attributes) {
    should(isNode(element),
      'flexio-jshelpers:setAttributes: `element` argument should be a NodeElement `%s` given',
      typeof element
    )
    should(isObject(attributes),
      'flexio-jshelpers:setAttributes: `attributes` argument should be an Object `%s` given',
      typeof attributes
    )

    for (let key in attributes) {
      let attribut = attributes[key]
      if (key === 'style') {
        this._setStyles(element, attribut)
      } else {
        element.setAttribute(key, attribut)
      }
    }
  }
}
export {
  HyperFlex
}
export const html = HyperFlex.html

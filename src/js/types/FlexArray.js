/**
 * @template TYPE, TYPE_OUT
 */
export class FlexArray extends Array {
  /**
   *
   * @param {...<TYPE>} args
   */
  constructor(...args) {
    super(...args)
    args.forEach(a => this._validate(a))
  }

  /**
   *
   * @param {*} v
   * @protected
   * @throws Error
   */
  _validate(v) {
    throw new TypeError('Should be implemented')
  }

  /**
   *
   * @param {...TYPE} v
   * @returns {number}
   */
  push(...v) {
    v.forEach(a => this._validate(a))
    return super.push(...v)
  }

  /**
   *
   * @param {...TYPE} v
   * @returns {number}
   */
  unshift(...v) {
    v.forEach(a => this._validate(a))
    return super.unshift(...v)
  }

  /**
   *
   * @param {TYPE} v
   * @param {number} i
   * @param {number} o
   * @return {Array<TYPE>}
   */
  fill(v, i, o) {
    this._validate(v)
    return super.fill(v, i, o)
  }

  /**
   *
   * @param {number} offset
   * @return {TYPE}
   */
  get(offset) {
    return this[offset]
  }

  /**
   *
   * @return {TYPE}
   */
  first() {
    return this.get(0)
  }

  /**
   *
   * @return {TYPE}
   */
  last() {
    return this[this.length - 1]
  }

  /**
   *
   * @param {FlexArray~filter<TYPE>} callback
   * @return {TYPE}
   */
  find(callback) {
    return super.find(callback)
  }

  /**
   *
   * @param {FlexArray~filter<TYPE>} callback
   * @param thisArg
   * @return {any[]}
   */
  filter(callback, thisArg) {
    return super.filter(callback, thisArg)
  }

  /**
   * @template TYPE
   * @callback FlexArray~filter<TYPE>
   * @param {TYPE} current
   * @param {number} index
   * @param {this} all
   * @return {boolean}
   */

  /**
   *
   * @param {Array<TYPE_OUT>} init
   * @param {FlexArray~mapToClb<TYPE>} clb
   * @return {Array<TYPE_OUT>}
   */
  mapTo(init, clb) {
    this.forEach((v, k, a) => {
      init.push(clb(v, k, a))
    })
    return init
  }

  /**
   *
   * @param {FlexArray~mapToClb<TYPE>} clb
   * @return {Array}
   */
  mapToArray(clb) {
    return this.mapTo([], clb)
  }

  /**
   *
   * @return {Array.<TYPE>}
   */
  toArray() {
    return this.mapToArray(v => v)
  }

  /**
   * @template TYPE
   * @callback FlexArray~mapToClb<TYPE>
   * @param {TYPE} v
   * @param {string} k
   * @param {this} a
   * @return {*}
   */

  /**
   *
   * @return {Array.<TYPE>}
   */
  toObject() {
    return this.toArray()
  }

  /**
   *
   * @return {Array.<TYPE>}
   */
  toJSON() {
    return this.toObject()
  }
}

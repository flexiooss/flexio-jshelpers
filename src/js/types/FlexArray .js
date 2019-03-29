/**
 * @template TYPE, TYPE_OUT
 */
class FlexArray extends Array {
  /**
   *
   * @param {...TYPE} args
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
   * @returns {Array<TYPE>}
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
   * @returns {TYPE}
   */
  last() {
    return this[this.length - 1]
  }

  /**
   *
   * @param {Array<TYPE_OUT>} init
   * @param {ExtendedArray~mapToClb<TYPE>} clb
   * @returns {Array<TYPE_OUT>}
   */
  mapTo(init, clb) {
    this.forEach((v) => {
      init.push(clb(v))
    })
    return init
  }

  /**
   *
   * @param {ExtendedArray~mapToClb<TYPE>} clb
   * @return {Array}
   */
  mapToArray(clb) {
    return this.mapTo([], clb)
  }

  /**
   * @template TYPE
   * @callback ExtendedArray~mapToClb<TYPE>
   * @param {TYPE} v
   * @return {*}
   */
}
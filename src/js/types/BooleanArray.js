import { globalFlexioImport } from '@flexio-oss/global-import-registry'
import { assertType, isBoolean, isNull } from '@flexio-oss/assert'
import { FlexArray } from '@flexio-oss/flex-types'
/**
 * @extends {FlexArray<?boolean>}
 */
class BooleanArray extends FlexArray {
  constructor(...args) {
    super(...args)
  }

  /**
   * @param {number} index
  * @returns {boolean}
   */
  get(index) {
    return this[index]
  }

  _validate(element) {
    if (!isNull(element)) {
      assertType(isBoolean(element), 'element should be a bool')
    }
  }

}
export { BooleanArray }
